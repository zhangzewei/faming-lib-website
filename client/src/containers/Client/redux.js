import { fromJS } from 'immutable';
import { actionTypes } from './actions';

const initState = fromJS({
  currentNews: {
    msg: '',
    title: ''
  }
})

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_NEWS:
      return state.update('currentNews', () => fromJS(action.article));
    default: return state;
  }
}