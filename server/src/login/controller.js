import {
  getDB,
  updateOneInDB,
  deleteOneFromBD
} from '../utils/dbUtils';
import _get from 'lodash/get';

const DB = getDB();

export const register = async request => {
  try {
    const {
      acount,
      password,
      type,
      tel,
      email,
      gender
    } = request.payload;
    const exists = await DB.exists({
      index: 'user',
      type: 'data',
      id: acount
    });
    if (exists) return {
      res: 'existed',
      msg: '用于已存在'
    }
    const resp = await DB.create({
      index: 'user',
      type: 'data',
      id: acount,
      body: {
        acount,
        password,
        type,
        tel: tel || '',
        gender: gender || '',
        email: email || '',
        orders: [], // 订单数，存入Ids
        goods: [] // 拥有商品数，类型为seller才会对这个字段进行修改
      }
    });
    return {
      res: 'success',
      msg: '注册成功'
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    };
  }
}

export const logIn = async request => {
  try {
    const { acount, password } = request.payload;
    const resp = await DB.get({
      index: 'user',
      type: 'data',
      id: acount
    });
    const userPassword = _get(resp, ['_source', 'password'], '');
    if (userPassword && userPassword === password) return {
      res: 'success',
      msg: '登录成功'
    };
    return {
      res: 'fail',
      msg: '登录失败，密码或账号错误'
    };
  } catch (err) {
    return {
      res: 'error',
      msg: err
    };
  }
}

export const deleteUser = request => {
  const { acount } = request.payload;
  return deleteOneFromBD({
    index: 'user',
    id: acount
  })
}

export const changePassword = request => {
  const { acount, password } = request.payload;
  return updateOneInDB({
    index: 'user',
    id: acount,
    doc: {
      password
    }
  })
}