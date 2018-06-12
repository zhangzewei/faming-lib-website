import { getDB } from '../utils/dbUtils';

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