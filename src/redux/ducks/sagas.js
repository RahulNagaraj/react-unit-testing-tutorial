import { all, call } from 'redux-saga/effects';
import { photos } from './photos/sagas';

export default function* rootSaga() {
  yield all([
    call(photos),
  ]);
}
