import { combineReducers } from 'redux';

import { dataUserReducer } from '../saga/userData/reducer';

export const rootReducers = () => combineReducers({
  dataUserReducer,
});
