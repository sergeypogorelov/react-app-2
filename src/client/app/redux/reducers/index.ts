import { combineReducers } from 'redux';

import { moviesReducer } from './movies-reducer/movies-reducer';

export const rootReducer = combineReducers({
  moviesPage: moviesReducer,
});
