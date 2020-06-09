import {
  SEARCH_MOVIES_FULFILLED,
  CHANGE_SEARCH,
  CHANGE_SEARCH_BY,
  CHANGE_SORT_BY,
} from '../../actions/action-types';

import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';

import { SearchMoviePageState } from '../../interfaces/search-movie-page-state/search-movie-page-state.interface';

import {
  SearchMoviePageActionTypes,
  SearchMoviesFulfilledAction,
  ChangeSearchAction,
  ChangeSearchByAction,
  ChangeSortByAction,
} from '../../actions/search-movie-page/search-movie-page';

export const searchMoviePageState: SearchMoviePageState = {
  search: '',
  searchBy: SearchBy.Title,
  sortBy: SortBy.ReleaseData,
  totalMovies: 0,
  movies: [],
};

export const searchMoviePageReducer = (
  state = searchMoviePageState,
  action: SearchMoviePageActionTypes
): SearchMoviePageState => {
  switch (action.type) {
    case SEARCH_MOVIES_FULFILLED:
      const typedAction = action as SearchMoviesFulfilledAction;
      return {
        ...state,
        movies: typedAction.payload.data,
        totalMovies: typedAction.payload.total,
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
