const initialState = {
  list: [],
  highlights: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TEXT':
      const { highlights } = state;
      highlights.push(action.payload);
      return {
        ...state,
        highlights,
      }
    case 'FETCH_PLACES':
      return {
        ...state,
        list: action.payload,
      }
      break;
  
    default:
      return state;
      break;
  }
};