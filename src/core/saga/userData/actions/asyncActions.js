import { asyncTypes } from '../types/asyncTypes';

export const asyncActions = Object.create({
  onCreateUserAsync: data => ({
    type: asyncTypes.CREATE_USER_ASYNC,
    payload: data,
  }),
  onLoginUserAsync: data => ({
    type: asyncTypes.LOGIN_USER_ASYNC,
    payload: data,
  }),
  onLogoutUserAsync: () => ({
    type: asyncTypes.LOGOUT_USER_ASYNC,
  }),
  onEditUserAsync: data => ({
    type: asyncTypes.EDIT_USER_ASYNC,
    payload: data,
  }),
});
