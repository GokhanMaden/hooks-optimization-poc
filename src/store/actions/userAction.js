// import axios from 'axios';

import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
} from '../constants';

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_INFO_REQUEST,
    });

    // const res = await axios.get(`/users/auth`);

    dispatch({
      type: USER_INFO_SUCCESS,
      // payload: res.data,
      payload: {
        data: {
          name: 'gokhan',
        },
      },
    });
  } catch (error) {
    dispatch({
      type: USER_INFO_FAILURE,
      payload: error.response.data.message,
    });
  }
};
