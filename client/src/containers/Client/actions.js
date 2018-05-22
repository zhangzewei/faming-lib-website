import { articles } from './constents';

export const actionTypes = {
  'GET_CURRENT_NEWS': 'get current news',
}

export const getCurrentNews = (newsId) => {
  const article = articles[newsId] || { title: '', msg: '' };
  return {
    type: actionTypes.GET_CURRENT_NEWS,
    article,
  }
}