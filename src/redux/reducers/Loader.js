import { START_LOADING, STOP_LOADING } from '../action-types';

const initState = {
  isLoading: false,
  pendingRequests: 0,
};

const Loader = (state = initState, action) => {
  let { isLoading } = state;
  switch (action.type) {
    case START_LOADING:
      if (state.pendingRequests + 1 > 0) {
        isLoading = true;
      }
      return {
        ...state,
        isLoading,
        pendingRequests: state.pendingRequests + 1,
      };

    case STOP_LOADING:
      if (state.pendingRequests - 1 <= 0) {
        isLoading = false;
      }
      return {
        ...state,
        isLoading,
        pendingRequests: state.pendingRequests - 1 < 0 ? 0 : state.pendingRequests - 1,
      };

    default:
      return state;
  }
};

export default Loader;
