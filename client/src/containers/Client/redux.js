import { fromJS } from 'immutable';
import { actionTypes } from './actions';

const initState = fromJS({
  currentNews: {},
  menus: {},
  carousel: [],
  fileList: [],
  newsList : [],
  homeNewsList: {
    gongzuoList: [],
    tonggaoList: [],
  }
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_NEWS:
      return state.update('currentNews', () => fromJS(action.currentNews));
    case actionTypes.GET_MENUS: 
      return state.update('menus', () => fromJS(action.menus));
    case actionTypes.GET_CAROUSEL:
      return state.update('carousel', () => fromJS(action.carousel));
    case actionTypes.GET_FILELIST:
      return state.update('fileList', () => fromJS(action.fileList));
    case actionTypes.GET_NEWSLIST: 
      return state.update('newsList', () => fromJS(action.newsList));
    case actionTypes.GET_HOME_NEWS_LIST:
      return state.update('homeNewsList', () => fromJS(action.homeNewsList));
    default: return state;
  }
}