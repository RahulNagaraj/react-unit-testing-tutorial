import { takeEvery, call, put } from 'redux-saga/effects';
import types from './types';
import { callUnspashApi } from '../../middlewares/api';
import actions from './actions';

export function* fetchPhotos() {
  try {
    const response = yield call(callUnspashApi, 'photos');
    yield put(actions.fetchPhotosSuccess(response));
  } catch (e) {
    yield put(actions.fetchPhotosFailure(e));
  }
}

export function* photos() {
  yield takeEvery(types.FETCH_PHOTOS_REQUEST, fetchPhotos);
}
