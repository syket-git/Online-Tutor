import {
  STUDENT_LOGIN,
  TUTOR_LOGIN,
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
  user: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //console.log(payload);
  switch (type) {
    case STUDENT_LOGIN:
    case TUTOR_LOGIN:
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
