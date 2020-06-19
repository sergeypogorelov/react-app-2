import { createStore, applyMiddleware, StoreEnhancer, Middleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import { rootReducer, AppState } from './reducers';

export default (initialState: AppState, ssrAdapter?: Middleware) => {
  let storeEnhancer: StoreEnhancer;

  if (ssrAdapter) {
    storeEnhancer = applyMiddleware(ssrAdapter, reduxPromiseMiddleware);
  } else {
    storeEnhancer = applyMiddleware(reduxPromiseMiddleware);
  }

  const store = createStore(rootReducer, initialState, storeEnhancer);

  return store;
};
