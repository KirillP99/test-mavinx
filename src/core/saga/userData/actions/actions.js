import { types } from '../types/types';

export const actions = Object.freeze({
  onCreateUserSuccess: message => ({
    type: types.CREATE_USER_SUCCESS,
    payload: message,
  }),
  onCreateUserFail: message => ({
    type: types.CREATE_USER_FAIL,
    payload: message,
  }),
  onLoginUserSuccess: data => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: data,
  }),
  onLoginUserFail: message => ({
    type: types.LOGIN_USER_FAIL,
    payload: message,
  }),
  onLogoutUser: message => ({
    type: types.LOGOUT_USER,
    payload: message,
  }),
  onEditUser: data => ({
    type: types.EDIT_USER,
    payload: data,
  }),
});
