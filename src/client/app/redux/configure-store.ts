import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import { rootReducer } from './reducers';
import { AppState } from './interfaces/app-state.interface';

export const configureStore = (initialState: AppState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromiseMiddleware)
  );
};
