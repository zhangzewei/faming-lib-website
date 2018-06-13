import { fromJS } from 'immutable';
import { actionTypes } from './actions';

const initState = fromJS({
  newsList: [],
  editNews: {}
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_LIST:
      return state.update('newsList', () => fromJS(action.list));
    case actionTypes.DELETE_NEWS: 
      return state.update('newsList', () => fromJS(action.list));
    case actionTypes.GET_NEWS_CONTENT:
      return state.update('editNews', () => fromJS(action.editNews));
    default: return state;
  }
}