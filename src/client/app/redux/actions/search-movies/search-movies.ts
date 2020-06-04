import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_FULFILLED,
  SEARCH_MOVIES_REJECTED,
} from '../action-types';

import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';

import { DataRequestQueryParams } from '../../../core/interfaces/common/data-request-query-params.interface';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';

import { moviesApiInstance } from '../../../core/api/movies/movies-api.class';

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
    limit: 6,
  };

  return {
    type: SEARCH_MOVIES,
    payload: moviesApiInstance.getAll(params),
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

export type SearchMoviesActionTypes =
  | SearchMoviesAction
  | SearchMoviesPendingAction
  | SearchMoviesFulfilledAction
  | SearchMoviesRejectedAction;
