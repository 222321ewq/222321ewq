import { createStore, applyMiddleware } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../services/api';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [];
middlewares.push(
  multiClientMiddleware({
    api: {
      client: api,
    },
  }),
  thunk,
);

const composer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

export default store;
