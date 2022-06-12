import {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
} from '../action-types';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const logoutAction = (payload) => ({
  type: LOGOUT,
  payload,
});

export const updateUserDetails = (payload) => ({
  type: UPDATE_USER,
  payload,
});
