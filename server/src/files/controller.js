import {
  getDB,
  getOneFromBD,
  updateOneInDB,
  deleteByIds,
  getAllSubjects,
  addOneToDBWithoutId,
  getResultsByMatch,
  genMatchQuery,
  resolveMultiResults
} from '../utils/dbUtils';

const DB = getDB();

export const addFile = request =>
  addOneToDBWithoutId({
    ...request.payload,
    createTime: new Date().getTime(),
    filePath: '/tmp/',
    visitTimes: 0,
    deleted: 0
  }, 'file');

export const getFileByTitle = async params => {
  try {
    const resp = await DB.search({
      index: 'file',
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

export const deleteFileById = request => {
  const { id } = request.payload;
  return updateOneInDB({
    index: 'file',
    id,
    doc: { deleted: 1 }
  })
}