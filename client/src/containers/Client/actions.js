import axios from 'axios';
import { articles } from './constents';

export const actionTypes = {
  GET_CURRENT_NEWS: 'get current news',
  GET_MENUS: 'get menus'
}

export const getCurrentNews = (id) => async dispatch => {
  try {
    const resp = await axios.get(`/news/${id}`);
    dispatch({
      type: actionTypes.GET_CURRENT_NEWS,
      currentNews: resp.data.msg,
    });
  } catch(e) {
    console.log(e)
  }
}

export const getMenuConfig = () => async dipatch => {
  try {
    const resp = await axios.get('/menus/');
    const menuFromDB = resp.data.msg[0].menus;
    const menusWithLink = {};
    Object.keys(menuFromDB).forEach(key => {
      menusWithLink[key] = menuFromDB[key].map(m => ({
        name: m.name || m.articleTitle,
        link: `/secondPage/news/${key}:${m.articleLinkId}`
      }))
    });
    menusWithLink.NewsMenu = [
      {
        name: '工作动态',
        link: '/secondPage/newsList/NewsMenu:gongzuo'
      },
      {
        name: '通知公告',
        link: '/secondPage/newsList/NewsMenu:tonggao'
      }
    ];
    menusWithLink.FileMenu = [
      {
        name: '文章下载',
        link: '/secondPage/fileList/FileMenu:wenzhang'
      },
      {
        name: '论文下载',
        link: '/secondPage/fileList/FileMenu:lunwenxiazai'
      }
    ];
    menusWithLink.ScientificMenu.push({
      name: '科研成果',
      link: '/secondPage/newsList/ScientificMenu:chengguo'
    });
    menusWithLink.PopulationOfscienceMenu = [
      {
        name: '转载文章',
        link: '/secondPage/newsList/PopulationOfscienceMenu:zhuanzai',
      }
    ];
    dipatch({
      type: actionTypes.GET_MENUS,
      menus: menusWithLink
    });
  } catch(e) {
    console.log(e);
  }
}