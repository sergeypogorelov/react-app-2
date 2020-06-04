import { combineReducers } from 'redux';

import {
  moviesReducer,
  moviesPageState,
} from './movies-reducer/movies-reducer';

export const rootReducer = combineReducers({
  moviesPage: moviesReducer,
});

export const initialState: AppState = {
  moviesPage: moviesPageState,
};

export type AppState = ReturnType<typeof rootReducer>;
