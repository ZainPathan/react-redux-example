// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod');
// } else {
//   module.exports = require('./configureStore.dev');
// }

import { createStore, compose, applyMiddleware } from 'redux';
//import thunk middleware
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { customLogginMiddleware } from './../middleware/customLogging';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState,
    //Apply to store
    applyMiddleware(thunk, customLogginMiddleware)
  );
}