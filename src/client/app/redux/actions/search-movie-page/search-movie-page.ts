import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_FULFILLED,
  SEARCH_MOVIES_REJECTED,
  CHANGE_SEARCH,
  CHANGE_SEARCH_BY,
  CHANGE_SORT_BY,
} from '../action-types';

import { GLOBALS } from '../../../core/constants/globals';

import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';
import { SortOrder } from '../../../core/enums/sort-order.enum';

import { DataRequestQueryParams } from '../../../core/interfaces/common/data-request-query-params.interface';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';

import { moviesApi } from '../../../core/api/movies/movies-api.class';

export const searchMovies = (
  search: string,
  searchBy?: SearchBy,
  sortBy?: SortBy
): SearchMoviesAction => {
  if (!search) {
    throw new Error('Search is not specified.');
  }

  if (!searchBy) {
    searchBy = SearchBy.Title;
  }

  if (!sortBy) {
    sortBy = SortBy.ReleaseData;
  }

  const params: DataRequestQueryParams = {
    search,
    searchBy,
    sortBy,
    limit: GLOBALS.moviesPerPage,
    sortOrder: SortOrder.Desc,
  };

  return {
    type: SEARCH_MOVIES,
    payload: moviesApi.getAll(params),
  };
};

export const changeSearch = (newSearch: string): ChangeSearchAction => {
  return {
    type: CHANGE_SEARCH,
    payload: newSearch,
  };
};

export const changeSearchBy = (newSearchBy: SearchBy): ChangeSearchByAction => {
  return {
    type: CHANGE_SEARCH_BY,
    payload: newSearchBy,
  };
};

export const changeSortBy = (newSortBy: SortBy): ChangeSortByAction => {
  return {
    type: CHANGE_SORT_BY,
    payload: newSortBy,
  };
};

export interface SearchMoviesAction {
  type: typeof SEARCH_MOVIES;
  payload: Promise<MoviesResponse>;
}

export interface SearchMoviesPendingAction {
  type: typeof SEARCH_MOVIES_PENDING;
}

export interface SearchMoviesFulfilledAction {
  type: typeof SEARCH_MOVIES_FULFILLED;
  payload: MoviesResponse;
}

export interface SearchMoviesRejectedAction {
  type: typeof SEARCH_MOVIES_REJECTED;
}

export interface ChangeSearchAction {
  type: typeof CHANGE_SEARCH;
  payload: string;
}

export interface ChangeSearchByAction {
  type: typeof CHANGE_SEARCH_BY;
  payload: SearchBy;
}

export interface ChangeSortByAction {
  type: typeof CHANGE_SORT_BY;
  payload: SortBy;
}

export type SearchMoviePageActionTypes =
  | SearchMoviesAction
  | SearchMoviesPendingAction
  | SearchMoviesFulfilledAction
  | SearchMoviesRejectedAction
  | ChangeSearchAction
  | ChangeSearchByAction
  | ChangeSortByAction;
