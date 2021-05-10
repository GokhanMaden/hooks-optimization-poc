/* eslint-disable import/no-anonymous-default-export */
import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
} from '../constants';

export const initialState = {
  isLoading: false,
  error: null,
  updatePassword: {
    isLoading: false,
    error: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return { ...state, isLoading: true };
    case USER_INFO_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case USER_INFO_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
