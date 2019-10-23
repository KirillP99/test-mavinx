import {
  call, apply, put, takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { api } from '../../../config/api';

import { actions } from '../actions/actions';

import { asyncTypes } from '../types/asyncTypes';

function* logout() {
  const response = yield apply(api, api.logout);
  const body = yield call([response, 'json']);
  sessionStorage.removeItem('token');
  yield put(actions.onLogoutUser(body.message));
}

export function* watchLogout() {
  yield takeLatest(asyncTypes.LOGOUT_USER_ASYNC, logout);
}
