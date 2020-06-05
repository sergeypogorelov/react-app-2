import {
  LOAD_MOVIE,
  LOAD_MOVIE_PENDING,
  LOAD_MOVIE_FULFILLED,
  LOAD_MOVIE_REJECTED,
  LOAD_MOVIES_BY_GENRE,
  LOAD_MOVIES_BY_GENRE_FULFILLED,
  LOAD_MOVIES_BY_GENRE_PENDING,
  LOAD_MOVIES_BY_GENRE_REJECTED,
} from '../action-types';

import { Movie } from '../../../core/interfaces/movie/movie.interface';

import { moviesApiInstance } from '../../../core/api/movies/movies-api.class';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';
import { SearchBy } from '../../../core/enums/search-by.enum';
import { GLOBALS } from '../../../core/constants/globals';

export const loadMovie = (id: number): LoadMovieAction => {
  return {
    type: LOAD_MOVIE,
    payload: moviesApiInstance.getById(id),
  };
};

export const loadMovieByGenre = (genre: string): LoadMoviesByGenreAction => {
  return {
    type: LOAD_MOVIES_BY_GENRE,
    payload: moviesApiInstance.getAll({
      search: genre,
      searchBy: SearchBy.Genres,
      limit: GLOBALS.moviesPerPage,
    }),
  };
};

export interface LoadMovieAction {
  type: typeof LOAD_MOVIE;
  payload: Promise<Movie>;
}

export interface LoadMoviePendingAction {
  type: typeof LOAD_MOVIE_PENDING;
}

export interface LoadMovieFulfilledAction {
  type: typeof LOAD_MOVIE_FULFILLED;
  payload: Movie;
}

export interface LoadMovieRejectedAction {
  type: typeof LOAD_MOVIE_REJECTED;
}

export interface LoadMoviesByGenreAction {
  type: typeof LOAD_MOVIES_BY_GENRE;
  payload: Promise<MoviesResponse>;
}

export interface LoadMoviesByGenrePendingAction {
  type: typeof LOAD_MOVIES_BY_GENRE_PENDING;
}

export interface LoadMoviesByGenreFulfilledAction {
  type: typeof LOAD_MOVIES_BY_GENRE_FULFILLED;
  payload: MoviesResponse;
}

export interface LoadMoviesByGenreRejectedAction {
  type: typeof LOAD_MOVIES_BY_GENRE_REJECTED;
}

export type ViewMovieActionTypes =
  | LoadMovieAction
  | LoadMoviePendingAction
  | LoadMovieFulfilledAction
  | LoadMovieRejectedAction
  | LoadMoviesByGenreAction
  | LoadMoviesByGenrePendingAction
  | LoadMoviesByGenreFulfilledAction
  | LoadMoviesByGenreRejectedAction;
