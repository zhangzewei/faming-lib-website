import { fromJS } from 'immutable';
import { actionTypes } from './actions';

const initState = fromJS({
  currentNews: {},
  menus: {},
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_NEWS:
      return state.update('currentNews', () => fromJS(action.currentNews));
    case actionTypes.GET_MENUS: 
      return state.update('menus', () => fromJS(action.menus))
    default: return state;
  }
}