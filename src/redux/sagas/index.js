import {
  all, call, delay, put, takeEvery,
} from 'redux-saga/effects';

export function* incrementAsync() {
  delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync),
  ]);
}
