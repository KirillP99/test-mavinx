import { Map } from 'immutable';
import { types } from './types/types';

const initialState = Map({
  isCreateUser: false,
  isAuth: false,
  message: '',
  currentUser: {},
});

export const dataUserReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.CREATE_USER_SUCCESS:
      return state.merge({ isCreateUser: true, message: payload });
    case types.CREATE_USER_FAIL:
      return state.merge({ isCreateUser: false, message: payload });
    case types.LOGIN_USER_SUCCESS:
      return state.merge({
        isAuth: true, isCreateUser: true, currentUser: payload, message: '',
      });
    case types.LOGIN_USER_FAIL:
      return state.merge({ isAuth: false, message: payload, isCreateUser: false });
    case types.LOGOUT_USER:
      return state.merge({ isAuth: false, message: payload, isCreateUser: true });
    case types.EDIT_USER:
      return state.merge({
        currentUser: payload, isCreateUser: true, isAuth: false, message: '',
      });
    default:
      return state;
  }
};
