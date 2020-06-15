import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import { rootReducer, AppState } from './reducers';

export default (initialState: AppState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromiseMiddleware)
  );

  return store;
};
