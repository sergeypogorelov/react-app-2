import { combineReducers } from 'redux';

import {
  searchMoviePageReducer,
  searchMoviePageState,
} from './search-movie-page-reducer/search-movie-page-reducer';

import {
  viewMoviePageReducer,
  viewMoviePageState,
} from './view-movie-page-reducer/view-movie-page-reducer';

export const rootReducer = combineReducers({
  searchMoviePage: searchMoviePageReducer,
  viewMoviePage: viewMoviePageReducer,
});

export const initialState: AppState = {
  searchMoviePage: searchMoviePageState,
  viewMoviePage: viewMoviePageState,
};

export type AppState = ReturnType<typeof rootReducer>;
