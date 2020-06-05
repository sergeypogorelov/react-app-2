import { combineReducers } from 'redux';

import {
  moviesReducer,
  moviesPageState,
} from './movies-reducer/movies-reducer';
import { movieReducer, moviePageState } from './movie-reducer/movie-reducer';

export const rootReducer = combineReducers({
  moviesPage: moviesReducer,
  moviePage: movieReducer,
});

export const initialState: AppState = {
  moviesPage: moviesPageState,
  moviePage: moviePageState,
};

export type AppState = ReturnType<typeof rootReducer>;
