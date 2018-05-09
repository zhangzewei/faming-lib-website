import {
  getDB,
  getOneFromBD,
  updateOneInDB,
  deleteByIds,
  getAllSubjects,
  addOneToDBWithoutId
} from '../utils/dbUtils';
import _get from 'lodash/get';
import { request } from 'https';

const DB = getDB();

export const addOneOrder = request => 
  addOneToDBWithoutId(request.payload, 'orders');

export const changeOrderStatus = request => {
  const { status, orderId } = request.payload;
  return updateOneInDB({
    index: 'orders',
    id: orderId,
    doc: { status }
  });
}

export const getOrderDetail = request =>
  getOneFromBD({index: 'orders', id: request.params.id});

export const getAllOrders = request =>
  getAllSubjects(request.payload.filter, 'orders');

export const deleteOrdersByIds = request =>
  deleteByIds(request.payload.orders, 'orders')