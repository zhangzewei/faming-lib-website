import {
  getDB,
  getOneFromBD,
  updateOneInDB,
  addOneToDBWithoutId,
  genMatchQuery,
  resolveMultiResults
} from '../utils/dbUtils';
import _omit from 'lodash/omit'; 

const DB = getDB();

export const addUser = request =>
  addOneToDBWithoutId({
    ...request.payload,
    deleted: 0
  }, 'user');

export const getUserById = params =>
  getOneFromBD({index: 'user', id: params.params.id});

export const getUserByName = async params => {
  try {
    const resp = await DB.search({
      index: 'user',
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

export const deleteUserById = request => {
  const { id } = request.payload;
  return updateOneInDB({
    index: 'user',
    id,
    doc: { deleted: 1 }
  })
}

export const updateUserById = request => {
  const {
    id
  } = request.payload;
  console.log('asd',_omit(request.payload, ['id']))
  return updateOneInDB({
    index: 'user',
    id,
    doc: {
      ..._omit(request.payload, ['id'])
    },
  })
} 