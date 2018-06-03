import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_PLACES, FETCH_PLACES_SUCCESS, FETCH_PLACES_ERROR } from '../constants';
import axios from 'axios';

function* verify(action) {
  try {
    const res = yield axios('/api/places');
    const payload = res.data;
    yield put({
      type: FETCH_PLACES_SUCCESS,
      payload,
    });
  } catch (error) {
    put({
      type: FETCH_PLACES_ERROR,
      payload: error.message,
    })
  }
}

export default function* watch() {
  yield takeLatest(FETCH_PLACES, verify);
}