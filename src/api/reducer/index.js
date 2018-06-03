import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_ENTITY_SUCCESS } from '../constants';
import fetchEntities from '../domain/fetch-entities';

const initialState = {
  router: {
    locationBeforeTransitions: null,
  },
  entities: {},
  highlights: [],
  map: {
    center: [
      -22.7191048,
      -45.56639799999999,
    ],
    zoom: 10,
    bounds: []
  },
};

export default (state = fromJS(initialState), action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.setIn(['router', 'locationBeforeTransitions'], action.payload);
      break;
    case 'SELECT_TEXT':
      return state.update('highlights', highlights => highlights.push(action.payload))
    case FETCH_ENTITY_SUCCESS:
      return fetchEntities(state, action);
      break;
  
    default:
      return state;
      break;
  }
};