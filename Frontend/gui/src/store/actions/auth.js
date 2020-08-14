import * as actionTypes from "./actionTypes";
import axios from "axios";
import Password from "antd/lib/input/Password";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000)
  }
}

export const authLogin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());

    axios.post("http:127.0.0.1/rest-auth/login/", {
      username: username,
      password: password
    })
    .then(res => {
        const token = res.data.key,
        const expirationDate = new Data(new Date().getTime() + 3600 * 1000)
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
    })
  };
};
