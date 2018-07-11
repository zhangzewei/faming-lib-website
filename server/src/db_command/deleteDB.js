import {
  getDB,
} from '../utils/dbUtils';
const DB = getDB();

// 新闻库
Promise.all([
  DB.indices.delete({
    index: 'news',
  }),
  
  // 文件库
  DB.indices.delete({
    index: 'file',
  }),
  
  // 用户库
  DB.indices.delete({
    index: 'user',
  }),
  
  // 轮播图库
  DB.indices.delete({
    index: 'carrousel',
  }),
  
  // 轮播图库
  DB.indices.delete({
    index: 'menus',
  }),

  // 轮播图库
  DB.indices.delete({
    index: 'carousellittle',
  })
]).then().catch(e => console.log(e))

