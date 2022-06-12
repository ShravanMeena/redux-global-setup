import { START_LOADING, STOP_LOADING } from '../action-types';

export const startLoading = (payload) => ({
  type: START_LOADING,
  payload,
});

export const stopLoading = (payload) => ({
  type: STOP_LOADING,
  payload,
});
