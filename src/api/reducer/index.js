import { fromJS } from 'immutable';

const initialState = {
  list: [],
  highlights: []
};

export default (state = fromJS(initialState), action) => {
  switch (action.type) {
    case 'SELECT_TEXT':
      return state.update('highlights', highlights => highlights.push(action.payload))
    case 'FETCH_PLACES':
      return state.set('list', fromJS(action.payload))
      break;
  
    default:
      return state;
      break;
  }
};