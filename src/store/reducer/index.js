import { combineReducers } from 'redux';

import userReducers from './userReducer';

const appReducer = combineReducers({
  user: userReducers,
});

export default appReducer;
