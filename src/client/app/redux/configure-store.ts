import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import storage from 'redux-persist/lib/storage';

import { rootReducer, AppState } from './reducers';

const persistCfg = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistCfg, rootReducer);

export default (initialState: AppState) => {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(reduxPromiseMiddleware)
  );
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
