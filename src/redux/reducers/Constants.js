import {
  CORE, COREFLATTEN, USER, USERFLATTEN,
} from '../action-types';

const initState = {
  core: {},
  coreFlatten: {},
  user: {},
  userFlatten: {},
};

const Constants = (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CORE:
      return {
        ...state,
        core: { ...payload },
      };

    case COREFLATTEN:
      return {
        ...state,
        coreFlatten: payload.items,
      };

    case USER:
      return {
        ...state,
        user: payload,
      };

    case USERFLATTEN:
      return {
        ...state,
        userFlatten: payload.items,
      };

    default:
      return state;
  }
};

export default Constants;
