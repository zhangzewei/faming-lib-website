import ES from 'elasticsearch';
import cuid from 'cuid';
import _get from 'lodash/get';

let DBClient = null;
export const getDB = () => {
  if (!DBClient) {
    DBClient = new ES.Client({
      host: 'localhost:9200',
      log: 'error'
    });
  }
  return DBClient;
}

const DB = getDB();

const genFilter = filters => Object.keys(filters)
  .map(filter => ({
    term: { [filter]: filters[filter] }
  }));

const deleteBulks = (delIds, index) => delIds.map(delId => ({
  delete: { _index: index, _type: 'data', _id: delId }
}));

export const resolveMultiResults = resultObj => {
  const hits = _get(resultObj, ['hits', 'hits']);
  return hits.map(hit => ({
    id: _get(hit, ['_id']),
    ..._get(hit, ['_source'])
  }));
}

export const genMatchQuery = filter => ({
  [Object.keys(filter)[0]]: {
    query: filter[Object.keys(filter)[0]],
    fuzziness: 'AUTO',
    operator: 'and',
    zero_terms_query: 'all'
  }
})

export const insetOneToBD = async ({
  index,
  id,
  body
}) => {
  try {
    const resp = await DB.create({
      index,
      type: 'data',
      id: id || cuid(),
      body
    });
    return {
      res: 'success',
      msg: resp
    }
  } catch (err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const getOneFromBD = async ({
  index,
  id
}) => {
  console.log(id)
  try {
    const resp = await DB.get({
      index,
      type: 'data',
      id
    });
    const _source = _get(resp, ['_source'], null);
    if (_source) return {
      res: 'success',
      msg: {
        id,
        ..._source
      }
    };
    return {
      res: 'error',
      msg: '获取失败'
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const deleteOneFromBD = async ({
  index,
  id
}) => {
  try {
    const resp = await DB.delete({
      index,
      type: 'data',
      id
    });
    
    return {
      res: 'success',
      msg: resp
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    };
  }
}

export const updateOneInDB = async ({
  index,
  id,
  doc
}) => {
  try {
    const resp = await DB.update({
      index,
      type: 'data',
      id,
      body: { doc }
    });
    return {
      res: 'success',
      msg: resp
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    };
  }
}

export const deleteByIds = async (ids, index) => {
  try {
    const bulkBody = deleteBulks(ids, index);
    const resp = await DB.bulk({
      body: bulkBody
    });
    return {
      res: 'success',
      msg: resp
    }
  } catch (err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const getAllSubjects = async (filter, index) => {
  try {
    const resp = await DB.search({
      index,
      type: 'data',
      size: 999,
      body: {
        query: {
          bool: {
            filter: filter ? genFilter(filter) : []
          }
        }
      }
    });
    return {
      res: 'success',
      msg: resolveMultiResults(resp)
    }
  } catch(err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const addOneToDBWithoutId = async (doc, index) => {
  try {
    const resp = await DB.index({
      index,
      type: 'data',
      body: {
        ...doc
      }
    });
    return {
      res: 'success',
      msg: resp,
    }
  } catch(err) {
    return {
      res: 'error',
      msg: err
    }
  }
}

export const getResultsByMatch = async (index, matchFilter) => {
  try {
    const resp = await DB.search({
      index,
      type: 'data',
      body: {
        query: {
          match: {
            ...genMatchQuery(matchFilter)
          }
        }
      }
    });
    return {
      res: 'success',
      msg: resolveMultiResults(resp),
    }
  } catch(err) {
    return {
      res: 'error',
      msg: err
    }
  }
}