import { Middleware } from 'redux';
import { ReduxPromiseMiddlewareObserver } from './redux-promise-middleware-observer.class';

export const reduxPromiseMiddlewareAdapter = (
  observer: ReduxPromiseMiddlewareObserver
) => {
  const result: Middleware = (store) => (next) => (action) => {
    const { payload } = action;

    if (payload instanceof Promise) {
      observer.registerPromise(payload);
    }

    return next(action);
  };

  return result;
};
