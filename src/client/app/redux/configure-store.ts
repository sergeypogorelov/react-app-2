import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import { rootReducer, AppState } from './reducers';

export const configureStore = (initialState: AppState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromiseMiddleware)
  );
};
