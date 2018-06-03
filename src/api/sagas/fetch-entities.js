import pluralize from 'pluralize';
import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_ENTITY_ERROR, FETCH_ENTITY_SUCCESS } from '../constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';

function* verify(action) {
  try {
    const [, entityUrl, slug] = action.payload.pathname.split('/');
    const entity = slug ? pluralize.singular(entityUrl) : entityUrl;
    if (entity) {
      const res = yield axios(`/api/${action.payload.pathname}`);
      const payload = slug ? res.data[0] : res.data;
      yield put({
        type: FETCH_ENTITY_SUCCESS,
        payload,
        meta: {
          entity
        }
      })
    }

  } catch (error) {
    put({
      type: FETCH_ENTITY_ERROR,
      payload: error.message,
    })
  }
}

export default function* watch() {
  yield takeLatest(LOCATION_CHANGE, verify);
}