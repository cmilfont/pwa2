import { all, fork } from 'redux-saga/effects';
import watchFetchPlaces from './fetch-places';

function* sagas() {
  yield all([
    fork(watchFetchPlaces),
  ]);
}

export default sagas;