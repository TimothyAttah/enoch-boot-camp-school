import { combineReducers } from 'redux';
import { authReducers } from './authReducer';

export const reducers = combineReducers({
  auth: authReducers,
});
