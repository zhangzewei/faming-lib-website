import fs from 'fs';
import path from 'path';
import base64Img from 'base64-img';
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

export const addNews = request =>
  addOneToDBWithoutId({
    ...request.payload,
    createTime: new Date().getTime(),
    visitTimes: 0,
    deleted: 0
  }, 'news');

export const getNewByTitle = async params => {
  try {
    const resp = await DB.search({
      index: 'news',
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
        },
        sort: [
          { createTime: 'desc' }
        ]
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

export const getNewsById = params =>
  getOneFromBD({index: 'news', id: params.params.id});

export const deleteNewsById = request => {
  const { id } = request.payload;
  return updateOneInDB({
    index: 'news',
    id,
    doc: { deleted: 1 }
  })
}

export const updateNewsById = request => {
  const {
    id
  } = request.payload;
  return updateOneInDB({
    index: 'news',
    id,
    doc: {
      ..._omit(request.payload, ['id'])
    },
  })
} 

export const uploadImageByNews = async request => {
  const { file } = request.payload;
  const imgName = new Date().getTime();
  const imagePath = path.resolve(__dirname, `../public/images/${imgName}.png`);
  const resp = await 
    fs.writeFileSync(
      imagePath,
      file
    );
  return {
    link: `/images/${imgName}.png`
  };
}

export const uploadFileByNews = async request => {
  const { file: { _data, hapi: { filename } } } = request.payload;
  const fileName = new Date().getTime() + '_' + filename
  const filePath = path.resolve(__dirname, `../public/images/${fileName}`);
  const resp = await 
    fs.writeFileSync(
      filePath,
      _data
    );
  return {
    link: `http://localhost:4000/images/${fileName}`
  };
}