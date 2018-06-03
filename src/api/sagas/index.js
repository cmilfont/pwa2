import { all, fork } from 'redux-saga/effects';
import watchFetchEntities from './fetch-entities';

function* sagas() {
  yield all([
    fork(watchFetchEntities),
  ]);
}

export default sagas;