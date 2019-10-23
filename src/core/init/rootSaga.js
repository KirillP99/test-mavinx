import { all, call } from 'redux-saga/effects';

import { watchCreateUser } from '../saga/userData/sagas/createUser';
import { watchLoginUser } from '../saga/userData/sagas/loginUser';
import { watchLogout } from '../saga/userData/sagas/logout';
import { watchEditUser } from '../saga/userData/sagas/editUser';

export function* rootSaga(dispatch, getState) {
  yield all([
    call(watchCreateUser, getState),
    call(watchLoginUser, getState),
    call(watchLogout, getState),
    call(watchEditUser, getState),
  ]);
}
