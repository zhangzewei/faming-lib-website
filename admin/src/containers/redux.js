import { fromJS } from 'immutable';
import { actionTypes } from './actions';

const initState = fromJS({
  newsList: [],
  editNews: {},
  fileList: []
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_LIST:
      return state.update('newsList', () => fromJS(action.list));
    case actionTypes.DELETE_NEWS: 
      return state.update('newsList', () => fromJS(action.list));
    case actionTypes.GET_NEWS_CONTENT:
      return state.update('editNews', () => fromJS(action.editNews));
    case actionTypes.GET_FILE_LIST:
      return state.update('fileList', () => fromJS(action.list));
    case actionTypes.DELETE_FILE: 
      return state.update('fileList', () => fromJS(action.list));
    default: return state;
  }
}