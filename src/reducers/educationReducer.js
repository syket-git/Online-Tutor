import {
  SSC_LEVEL,
  HSC_LEVEL,
  BOARD_NAME,
  GROUP_NAME,
  UNIVERSITY_NAME,
  PASSING_YEARS,
} from '../actions/types';

const initialState = {
  loading: true,
  ssc: null,
  hsc: null,
  group: null,
  university: null,
  board: null,
  years: null,
};

export const educationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SSC_LEVEL:
      return {
        ...state,

        loading: false,
        ssc: payload,
      };
    case HSC_LEVEL:
      return {
        ...state,
        loading: false,
        hsc: payload,
      };

    case BOARD_NAME:
      return {
        ...state,
        loading: false,
        board: payload,
      };
    case GROUP_NAME:
      return {
        ...state,
        loading: false,
        group: payload,
      };
    case UNIVERSITY_NAME:
      return {
        ...state,
        loading: false,
        university: payload,
      };
    case PASSING_YEARS:
      return {
        ...state,
        loading: false,
        years: payload,
      };

    default:
      return state;
  }
};
