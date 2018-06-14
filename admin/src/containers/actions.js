import axios from 'axios';
import { notification } from 'antd';

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export const actionTypes = {
  GET_CURRENT_NEWS: 'get current news',
  GET_NEWS_LIST: 'get news list',
  DELETE_NEWS: 'delete news by id',
  GET_NEWS_CONTENT: 'get news content',
  GET_FILE_LIST: 'get file list',
  DELETE_FILE: 'delete file'
}

export const getNewsList = title => async dispatch => {
  try {
    const resp = await axios.get(`/news/list/${title}`);
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '新闻列表', '获取新闻列表成功');
      dispatch({
        type: actionTypes.GET_NEWS_LIST,
        list: resp.data.msg
      });
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '新闻列表', '获取列表失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '新闻列表', '获取列表失败');
  }
  
}

export const deleteNews = (id, newsList) => async dispatch => {
  try {
    const resp = await axios.post('/news/delete/', {id});
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '新闻列表', '删除新闻成功');
      const deletedNewsList = newsList.filter(news => news.id !== id);
      dispatch({
        type: actionTypes.DELETE_NEWS,
        list: deletedNewsList,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '新闻列表', '删除新闻失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '新闻列表', `删除新闻失败, ${e}`);
  }
}

export const getNewsById = id => async dispatch => {
  try {
    const resp = await axios.get(`/news/${id}`);
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '新闻编辑', '获取新闻内容成功');
      dispatch({
        type: actionTypes.GET_NEWS_CONTENT,
        editNews: resp.data.msg,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '新闻编辑', '获取新闻内容失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '新闻编辑', `获取新闻内容失败, ${e}`);
  }
}

export const updateNews = (news, id) => async () => {
  try {
    const resp = await axios.post(`/news/update/`, { id, ...news });
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '新闻编辑', '发布新闻内容成功');
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '新闻编辑', '发布新闻内容失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '新闻编辑', `发布新闻内容失败, ${e}`);
  }
}

export const addNews = news => async () => {
  try {
    const resp = await axios.post(`/news/add`, { ...news });
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '新闻编辑', '发布新闻内容成功');
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '新闻编辑', '发布新闻内容失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '新闻编辑', `发布新闻内容失败, ${e}`);
  }
}

export const getFileList = title => async dispatch => {
  try {
    const resp = await axios.get(`/file/list/${title}`);
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '文件列表', '获取文件列表成功');
      dispatch({
        type: actionTypes.GET_FILE_LIST,
        list: resp.data.msg
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '文件列表', '获取文件列表失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '文件列表', `获取文件列表失败, ${e}`);
  }
}

export const deleteFile = (id, fileList) => async dispatch => {
  try {
    const resp = await axios.post('/file/delete/', {id});
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '文件列表', '删除文件成功');
      const deletedFileLsit = fileList.filter(file => file.id !== id);
      dispatch({
        type: actionTypes.DELETE_FILE,
        list: deletedFileLsit,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '文件列表', '删除文件失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '文件列表', `删除文件失败, ${e}`);
  }
}