import {
  call, apply, put, takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { api } from '../../../config/api';

import { actions } from '../actions/actions';

import { asyncTypes } from '../types/asyncTypes';

function* loginUser({ payload: data }) {
  const response = yield apply(api, api.login, [data]);
  const body = yield call([response, 'json']);
  if (body.status) {
    sessionStorage.setItem('token', body.token);
    yield put(actions.onLoginUserSuccess(body.user));
  } else {
    yield put(actions.onLoginUserFail(body.message));
  }
}

export function* watchLoginUser() {
  yield takeLatest(asyncTypes.LOGIN_USER_ASYNC, loginUser);
}
