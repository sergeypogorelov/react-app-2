import {
  SEARCH_MOVIES_FULFILLED,
  CHANGE_SEARCH,
  CHANGE_SEARCH_BY,
  CHANGE_SORT_BY,
} from '../../actions/action-types';

import {
  SearchMoviesActionTypes,
  SearchMoviesFulfilledAction,
  ChangeSearchAction,
  ChangeSearchByAction,
  ChangeSortByAction,
} from '../../actions/search-movies/search-movies';

import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';

import { MoviesPageState } from '../../interfaces/movies-page/movies-page-state.interface';

export const moviesPageState: MoviesPageState = {
  search: '',
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
    case CHANGE_SEARCH:
      return {
        ...state,
        search: (action as ChangeSearchAction).payload,
      };
    case CHANGE_SEARCH_BY:
      return {
        ...state,
        searchBy: (action as ChangeSearchByAction).payload,
      };
    case CHANGE_SORT_BY:
      return {
        ...state,
        sortBy: (action as ChangeSortByAction).payload,
      };
    default:
      return state;
  }
};
