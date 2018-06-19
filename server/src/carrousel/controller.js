import {
  getDB,
  updateOneInDB,
  addOneToDBWithoutId,
  genMatchQuery,
  resolveMultiResults
} from '../utils/dbUtils';

const DB = getDB();

export const addImg = request =>
  addOneToDBWithoutId({
    ...request.payload,
    deleted: 0
  }, 'carrousel');

export const getImgByName = async params => {
  try {
    const resp = await DB.search({
      index: 'carrousel',
      type: 'data',
      body: {
        query: {
          bool: {
            must_not: {
              term: {
                deleted: 1 // 搜索对应没有删除的，删除的为1，没删除的为0
              }
            },
            must: {
              match: {
                ...genMatchQuery(params.params)
              }
            }
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

export const deleteImgById = request => {
  const { id } = request.payload;
  return updateOneInDB({
    index: 'carrousel',
    id,
    doc: { deleted: 1 }
  })
}