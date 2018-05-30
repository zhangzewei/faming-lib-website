import { fromJS } from 'immutable';
import { actionTypes } from './actions';

const initState = fromJS({})

export default (state = initState, action) => {
  switch (action.type) {
    default: return state;
  }
}