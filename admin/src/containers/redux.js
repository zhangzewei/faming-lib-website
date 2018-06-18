import { fromJS } from 'immutable';
import { actionTypes } from './actions';

const initState = fromJS({
  newsList: [],
  editNews: {},
  fileList: [],
  pics: [],
  users: [],
  currentUser: {},
  fileAdded: true,
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
    case actionTypes.GET_PICS:
      return state.update('pics', () => fromJS(action.pics));
    case actionTypes.DELETE_PIC:
      return state.update('pics', () => fromJS(action.pics));
    case actionTypes.GET_USERS:
      return state.update('users', () => fromJS(action.users));
    case actionTypes.DELETE_USERS:
      return state.update('users', () => fromJS(action.users));
    case actionTypes.GET_CURRENT_USER:
      return state.update('currentUser', () => fromJS(action.user));
    case actionTypes.ADD_FILE:
      return state.update('fileAdded', () => fromJS(action.added));
    default: return state;
  }
}