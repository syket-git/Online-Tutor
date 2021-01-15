import {
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOG_OUT,
} from '../actions/types';
import Cookies from 'js-cookie';

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //console.log(payload);
  switch (type) {
    case LOGIN_SUCCESS:
      Cookies.set('userData', payload, { expires: 1 });
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOG_OUT:
      Cookies.remove('userData');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};
