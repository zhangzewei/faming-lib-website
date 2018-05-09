import { getDB } from '../utils/dbUtils';

const DB = getDB();

// 用户库
DB.indices.create({
  index: 'user',
});

// 商品库
DB.indices.create({
  index: 'goods'
});

// 订单库
DB.indices.create({
  index: 'orders'
});