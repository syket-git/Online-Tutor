import { REGISTER_FAIL } from './types';
import { setAlert } from './alert';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const BASE_URL = 'http://localhost:5000/api';

export const studentRegister = ({
  firstName,
  lastName,
  email,
  phone,
  password,
  gender,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
  });

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/student/register`,
      body,
      config
    );

    dispatch(setAlert(res.data, 'success'));
    if (res) {
      return <Redirect to="/login/student" />;
    }
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const tutorRegister = ({
  firstName,
  lastName,
  email,
  phone,
  password,
  gender,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
  });

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/tutor/register`,
      body,
      config
    );

    dispatch(setAlert(res.data, 'success'));
    if (res) {
      return <Redirect to="/tutor/student" />;
    }
  } catch (err) {
    const errors = err?.response?.data;
    if (errors) {
      dispatch(setAlert(errors, 'danger'));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
