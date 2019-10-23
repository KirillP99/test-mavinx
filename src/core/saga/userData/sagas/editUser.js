import {
  apply, call, put, takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { api } from '../../../config/api';

import { actions } from '../actions/actions';

import { asyncTypes } from '../types/asyncTypes';

function* editUser({ payload: data }) {
  const response = yield apply(api, api.editUser, [data]);
  const body = yield call([response, 'json']);
  yield put(actions.onEditUser(body.user));
}

export function* watchEditUser() {
  yield takeLatest(asyncTypes.EDIT_USER_ASYNC, editUser);
}
