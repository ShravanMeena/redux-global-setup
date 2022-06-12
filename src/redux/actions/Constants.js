import {
  CORE,
  COREFLATTEN,
  USER,
  USERFLATTEN,
} from '../action-types';

export const coreConstants = (payload) => ({
  type: CORE,
  payload,
});

export const coreFlattenConstants = (payload) => ({
  type: COREFLATTEN,
  payload,
});

export const userConstants = (payload) => ({
  type: USER,
  payload,
});

export const userFlattenConstants = (payload) => ({
  type: USERFLATTEN,
  payload,
});
