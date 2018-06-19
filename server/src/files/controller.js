import path from 'path';
import fs from 'fs';
import {
  getDB,
  updateOneInDB,
  addOneToDBWithoutId,
  genMatchQuery,
  resolveMultiResults
} from '../utils/dbUtils';

const DB = getDB();

export const addFile = request => {
  const { file } = request.payload;
  console.log(file);
  return addOneToDBWithoutId({
    ...request.payload,
    createTime: new Date().getTime(),
    visitTimes: 0,
    deleted: 0
  }, 'file');
}

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

export const uploadFile = async request => {
  const { file, fileName } = request.payload;
  const time = new Date().getTime();
  const filePath = path.resolve(__dirname, `../public/files/${time}-${fileName}`);
  const resp = await 
    fs.writeFileSync(
      filePath,
      file
    );
  return {
    link: `/files/${time}-${fileName}`
  };
}