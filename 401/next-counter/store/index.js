import { createStore, combineReducers, applyMiddleware } from 'redux';

import AppReducer from './reducers/app.js';

let reducers = combineReducers({
  app: AppReducer,
});

export default () => createStore(reducers, applyMiddleware());

