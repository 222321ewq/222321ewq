import { combineReducers } from 'redux';

import lawsuit from './lawsuit';
import auth from './auth';
import client from './client';

const reducers = combineReducers({
  lawsuit,
  auth,
  client,
});

export default reducers;
