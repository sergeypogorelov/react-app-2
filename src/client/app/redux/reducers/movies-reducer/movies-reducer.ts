import { SEARCH_MOVIES_FULFILLED } from '../../actions/action-types';

import {
  SearchMoviesActionTypes,
  SearchMoviesFulfilledAction,
} from '../../actions/search-movies/search-movies';

import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';

import { MoviesPageState } from '../../interfaces/movies-page/movies-page-state.interface';

export const moviesPageState: MoviesPageState = {
  searchBy: SearchBy.Title,
  sortBy: SortBy.ReleaseData,
  totalMovies: 0,
  movies: [],
};

export const moviesReducer = (
  state = moviesPageState,
  action: SearchMoviesActionTypes
): MoviesPageState => {
  switch (action.type) {
    case SEARCH_MOVIES_FULFILLED:
      const newAction = action as SearchMoviesFulfilledAction;
      return {
        ...state,
        movies: newAction.payload.data,
        totalMovies: newAction.payload.total,
      };
    default:
      return state;
  }
};
