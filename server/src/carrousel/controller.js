import {
  getDB,
  updateOneInDB,
  addOneToDBWithoutId,
  genMatchQuery,
  resolveMultiResults,
  getAllSubjects
} from '../utils/dbUtils';
import { REFUSED } from 'dns';

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

export const getCarsoul = async () => {
  try {
    const resp = await DB.search({
      index: 'carousellittle',
      type: 'data',
      body: {
        query: {
          bool: {
            must_not: {
              term: {
                deleted: 1 // 搜索对应没有删除的，删除的为1，没删除的为0
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
  };
}

export const addCarousel = request => addOneToDBWithoutId({
  ...request.payload,
  deleted: 0
}, 'carousellittle');

export const deleteCarousel = request => updateOneInDB({
  index: 'carousellittle',
  id: request.payload.id,
  doc: { deleted: 1 }
})