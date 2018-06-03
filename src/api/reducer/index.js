import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_PLACES_SUCCESS } from '../constants';

const initialState = {
  router: {
    locationBeforeTransitions: null,
  },
  list: [],
  highlights: []
};

export default (state = fromJS(initialState), action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.setIn(['router', 'locationBeforeTransitions'], action.payload);
      break;
    case 'SELECT_TEXT':
      return state.update('highlights', highlights => highlights.push(action.payload))
    case FETCH_PLACES_SUCCESS:
      return state.set('list', fromJS(action.payload))
      break;
  
    default:
      return state;
      break;
  }
};