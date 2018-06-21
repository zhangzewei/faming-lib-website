import { Base64 } from 'js-base64';
import {
  getDB,
  addOneToDBWithoutId,
} from '../utils/dbUtils';
const DB = getDB();

// 新闻库
DB.indices.create({
  index: 'news',
});

// 文件库
DB.indices.create({
  index: 'file',
});

// 用户库
DB.indices.create({
  index: 'user',
});

// 轮播图库
DB.indices.create({
  index: 'carrousel',
});

// 添加超级管理员，在初始化数据库的时候
addOneToDBWithoutId({
  name: "超级管理员",
  authority: "superAdmin",
  password: Base64.encode('superAdmin'),
  deleted: 0
}, 'user');