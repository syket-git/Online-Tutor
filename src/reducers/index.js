import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import alert from './alert';

const rootReducer = combineReducers({
  auth: authReducer,
  alert,
});

export default rootReducer;
