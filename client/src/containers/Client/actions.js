import axios from 'axios';
import { notification } from 'antd';
import _get from 'lodash/get';

notification.config({
  duration: 2,
});

export const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export const actionTypes = {
  GET_CURRENT_NEWS: 'get current news',
  GET_MENUS: 'get menus',
  GET_CAROUSEL: 'get carousel',
  GET_FILELIST: 'get filelist',
  GET_NEWSLIST: 'get newslist',
  GET_HOME_NEWS_LIST: 'get home news list',
  GET_CAROUSEL_LITTLE: 'get carousel little',
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
    openNotificationWithIcon('error', '出错了', `${JSON.stringify(e)}`);
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
        link: '/secondPage/fileList/FileMenu:article'
      },
      {
        name: '论文下载',
        link: '/secondPage/fileList/FileMenu:lunwen'
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
      },
      {
        name: '科普宣传',
        link: '/secondPage/newsList/PopulationOfscienceMenu:kepu',
      }
    ];
    dipatch({
      type: actionTypes.GET_MENUS,
      menus: menusWithLink
    });
  } catch(e) {
    openNotificationWithIcon('error', '出错了', `${JSON.stringify(e)}`);
  }
}

export const getCarouselPics = () => async dispatch => {
  try {
    const resp = await axios.get('/carrousel/list/*');
    dispatch({
      type: actionTypes.GET_CAROUSEL,
      carousel: resp.data.msg,
    })
  } catch(e) {
    openNotificationWithIcon('error', '出错了', `${JSON.stringify(e)}`);
  }
}

export const getFileList = type => async dispatch => {
  try {
    const resp = await axios.get(`/file/clientlist/${type}`);
    dispatch({
      type: actionTypes.GET_FILELIST,
      fileList: resp.data.msg,
    })
  } catch(e) {
    openNotificationWithIcon('error', '出错了', `${JSON.stringify(e)}`);
  }
}

export const getNewsList = type => async dispatch => {
  try {
    const resp = await axios.get(`/news/listByType/${type}`);
    dispatch({
      type: actionTypes.GET_NEWSLIST,
      newsList: resp.data.msg,
    })
  } catch(e) {
    openNotificationWithIcon('error', '出错了', `${JSON.stringify(e)}`);
  }
}

export const getHomePageNewsList = () => async dispatch => {
  try {
    const gongzuo = await axios.get(`/news/listByType/gongzuo`); // 获取首页工作资讯
    const tonggao = await axios.get(`/news/listByType/tonggao`); // 获取首页通告资讯
    const gongzuoList = _get(gongzuo, ['data', 'msg'], []).splice(0, 6);
    const tonggaoList = _get(tonggao, ['data', 'msg'], []).splice(0, 6);
    const homeNewsList = {
      gongzuoList,
      tonggaoList
    };
    dispatch({
      type: actionTypes.GET_HOME_NEWS_LIST,
      homeNewsList
    })
  } catch(e) {
    openNotificationWithIcon('error', '出错了', `${JSON.stringify(e)}`);
  }
}

export const getCarouselLittle = () => async dispatch => {
  try {
    const resp = await axios.get(`/carousel/littleList`); // 获取首页工作资讯
    dispatch({
      type: actionTypes.GET_CAROUSEL_LITTLE,
      carouselLittle: resp.data.msg,
    })
  } catch(e) {
    openNotificationWithIcon('error', '出错了', `${JSON.stringify(e)}`);
  }
}