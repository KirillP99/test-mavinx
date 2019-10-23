import {
  apply, call, put, takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { api } from '../../../config/api';

import { actions } from '../actions/actions';

import { asyncTypes } from '../types/asyncTypes';

function* createUser({ payload: data }) {
  const response = yield apply(api, api.registration, [data]);
  const body = yield call([response, 'json']);
  if (body.status) {
    yield put(actions.onCreateUserSuccess(body.message));
  } else {
    yield put(actions.onCreateUserFail(body.message));
  }
}

export function* watchCreateUser() {
  yield takeLatest(asyncTypes.CREATE_USER_ASYNC, createUser);
}
