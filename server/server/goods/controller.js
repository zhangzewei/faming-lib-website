import {
  getDB,
  getOneFromBD,
  updateOneInDB,
  deleteByIds,
  getAllSubjects,
  addOneToDBWithoutId
} from '../utils/dbUtils';
import _get from 'lodash/get';

const DB = getDB();

export const addGood = request => 
  addOneToDBWithoutId(request.payload, 'goods');


export const getAllGoods = request => {
  const { filter } = request.payload;
  return getAllSubjects(filter, 'goods')
}

export const getGoodDetails = request => {
  const { goodId } = request.params;
  return getOneFromBD({
    index: 'goods',
    id: goodId
  });
}

export const deleteGoods = request => {
  const { goodIds } = request.payload;
  return deleteByIds(goodIds, 'goods')
}

export const updateGood = request => {
  const { 
    goodId,
    name,
    tag,
    imgUrl,
    price,
    desc,
  } = request.payload;
  return updateOneInDB({
    index: 'goods',
    id: goodId,
    doc: {
      name,
      tag,
      imgUrl,
      price,
      desc,
    }
  });
}

export const addSellNum = request => updateOneInDB({
  index: 'goods',
  id: request.payload.goodId,
  doc: {
    sellNum: request.payload.sellNum + 1,
  }
});