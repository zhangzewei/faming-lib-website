import axios from 'axios';
import { notification } from 'antd';

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
  GET_NEWS_LIST: 'get news list',
  DELETE_NEWS: 'delete news by id',
  GET_NEWS_CONTENT: 'get news content',
  GET_FILE_LIST: 'get file list',
  DELETE_FILE: 'delete file',
  GET_PICS: 'get pics',
  DELETE_PIC: 'delete pics',
  GET_USERS: 'get users',
  DELETE_USERS: 'delete users',
  GET_CURRENT_USER: 'get current user',
  ADD_FILE: 'add file',
  LOGIN_DONE: 'login done',
  LOG_OUT: 'log out',
  LOG_IN_BY_LOCALSTORAGE: 'login by localstorage',
  GET_MENUS: 'get menus',
  UPDATE_MENUS: 'update menus',
  DELETE_MENU: 'delete menu',
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

export const getPics = title => async dispatch => {
  try {
    const resp = await axios.get(`/carrousel/list/${title}`);
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '轮播图列表', '获取轮播图列表成功');
      dispatch({
        type: actionTypes.GET_PICS,
        pics: resp.data.msg,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '轮播图列表', '获取轮播图列表失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '轮播图列表', `获取轮播图列表失败, ${e}`);
  }
}

export const deletePic = (id, pics) => async dispatch => {
  try {
    const resp = await axios.post('/carrousel/delete/', {id});
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '文件列表', '删除文件成功');
      const deletedPics = pics.filter(pic => pic.id !== id);
      dispatch({
        type: actionTypes.DELETE_PIC,
        pics: deletedPics,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '文件列表', '删除文件失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '文件列表', `删除文件失败, ${e}`);
  }
}

export const getUsers = name => async dispatch => {
  try {
    const resp = await axios.get(`/user/list/${name}`);
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '用户列表', '获取用户列表成功');
      dispatch({
        type: actionTypes.GET_USERS,
        users: resp.data.msg,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '用户列表', '获取用户列表失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '用户列表', `获取用户列表失败, ${e}`);
  }
}

export const deleteUser = (id, users) => async dispatch => {
  try {
    const resp = await axios.post('/user/delete/', {id});
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '用户列表', '删除用户成功');
      const deletedUsers = users.filter(user => user.id !== id);
      dispatch({
        type: actionTypes.DELETE_USERS,
        users: deletedUsers,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '用户列表', '删除用户失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '用户列表', `删除用户失败, ${e}`);
  }
}

export const getUserById = id => async dispatch => {
  try {
    const resp = await axios.get(`/user/${id}`);
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '用户管理', '获取用户信息成功');
      dispatch({
        type: actionTypes.GET_CURRENT_USER,
        user: resp.data.msg,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '用户管理', '获取用户信息失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '用户管理', `获取用户信息失败, ${e}`);
  }
}

export const updateUser = (id, doc) => async () => {
  try {
    const resp = await axios.post(`/user/update`, { id, ...doc });
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '用户管理', '更新用户信息成功');
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '用户管理', '更新用户信息失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '用户管理', `更新用户信息失败, ${e}`);
  }
}

export const addUser = doc => async () => {
  try {
    const resp = await axios.post(`/user/add`, { ...doc });
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '用户管理', '新增用户信息成功');
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '用户管理', '新增用户信息失败');
    }
  } catch (e) {
    openNotificationWithIcon('error', '用户管理', `新增用户信息失败, ${e}`);
  }
}

export const addFile = doc => async dispath => {
  try {
    const resp = await axios.post(`/file/add`, { ...doc });
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '文件管理', '文件添加成功');
      setTimeout(() => {
        dispath(getFileList('*'))
      }, 1000);
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '文件管理', '文件添加失败');
    }
  } catch(e) {
    openNotificationWithIcon('error', '文件管理', `文件添加失败, ${e}`);
  }
}

export const addPics = doc => async dispath => {
  try {
    const resp = await axios.post(`/carrousel/add`, { ...doc });
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '轮播图', '轮播图添加成功');
      setTimeout(() => {
        dispath(getPics('*'))
      }, 1000);
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '轮播图', '轮播图添加失败');
    }
  } catch(e) {
    openNotificationWithIcon('error', '轮播图', `轮播图添加失败, ${e}`);
  }
}

export const login = doc => async dispatch => {
  try {
    const resp = await axios.post(`/user/login`, { ...doc });
    if (resp.data.res === 'success') {
      const user  = resp.data.msg;
      user.logined = true;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: actionTypes.LOGIN_DONE,
        user
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '登录', `登录失败，${resp.data.msg}`);
    }
  } catch(e) {
    openNotificationWithIcon('error', '登录', `登录失败, ${e}`);
  }
}

export const logOut = () => ({
  type: actionTypes.LOG_OUT,
  user: {}
})

export const loginByLocalStorage = user => ({
  type: actionTypes.LOG_IN_BY_LOCALSTORAGE,
  user
})

export const getMenus = () => async dispatch => {
  try {
    const resp = await axios.get(`/menus/`);
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '菜单管理', '获取菜单成功');
      dispatch({
        type: actionTypes.GET_MENUS,
        menus: resp.data.msg[0],
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '菜单管理', '获取菜单失败');
    }
  } catch(e) {
    openNotificationWithIcon('error', '菜单管理', `获取菜单失败, ${e}`);
  }
}

export const updateMenus = (menusIonfo, doc) => async dispatch => {
  const menus = menusIonfo.menus;
  menus[doc.currentTab].push({
    name: doc.menuName,
    articleLinkId: doc.articleLinkId,
    articleTitle: doc.articleTitle,
  });
  try {
    const resp = await axios.post(`/menus/update`, {id: menusIonfo.id, menus});
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '菜单管理', '更新菜单成功');
      dispatch({
        type: actionTypes.UPDATE_MENUS,
        menus: menusIonfo,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '菜单管理', '更新菜单失败');
    }
  } catch(e) {
    openNotificationWithIcon('error', '菜单管理', `更新菜单失败, ${e}`);
  }
}

export const deleteMenus = (menusIonfo, doc) => async dispatch => {
  const menus = menusIonfo.menus;
  const deletedMenus = menus[doc.currentTab].filter(menu => menu.articleLinkId !== doc.articleLinkId);
  menusIonfo.menus[doc.currentTab] = deletedMenus;
  try {
    const resp = await axios.post(`/menus/update`, {id: menusIonfo.id, menus: menusIonfo.menus});
    if (resp.data.res === 'success') {
      openNotificationWithIcon('success', '菜单管理', '更新菜单成功');
      dispatch({
        type: actionTypes.DELETE_MENU,
        menus: menusIonfo,
      })
    }
    if (resp.data.res === 'error') {
      openNotificationWithIcon('error', '菜单管理', '更新菜单失败');
    }
  } catch(e) {
    openNotificationWithIcon('error', '菜单管理', `更新菜单失败, ${e}`);
  }
}