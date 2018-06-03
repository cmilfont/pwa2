import { fromJS, List } from 'immutable';

function getCoords(item) {
  const { lat, lon } = (item.type === 'experience')? 
    item.destination.location: item.location;
  return [lat, lon];
}

export default (state, action) => {

  const isArray = action.payload.length;
  const coords = isArray ? 
    action.payload.map(item => getCoords(item)):
    [getCoords(action.payload)];

  const newState = state.setIn(['map', 'bounds'], List(coords))
                        .setIn(['entities', action.meta.entity], fromJS(action.payload))


  return isArray ?
      newState:
      newState.setIn(['map', 'center'], fromJS(getCoords(action.payload)))
              .setIn(['map', 'zoom'], 16);
}