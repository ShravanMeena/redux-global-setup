import { LOGIN, LOGOUT, UPDATE_USER } from '../action-types';
import { SESSION_ID_KEY } from '../../constants/common';

const initState = {
  sessionId: localStorage.getItem(SESSION_ID_KEY),
  isLoggedIn: false,
  user: null,
  organisationId: null,
  employeeId: null,
};

const Auth = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case LOGIN:
      localStorage.setItem(SESSION_ID_KEY, payload.sessionId);
      return {
        ...state,
        sessionId: payload.sessionId,
        isLoggedIn: true,
        user: payload.user,
        organisationId: payload.organisationId,
        employeeId: payload.employeeId,
      };

    case LOGOUT:
      localStorage.removeItem(SESSION_ID_KEY);
      return {
        ...state,
        sessionId: null,
        isLoggedIn: false,
        user: null,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default Auth;
