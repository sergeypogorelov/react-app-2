import { GLOBALS } from '../../../core/constants/globals';
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

import { SearchBy } from '../../../core/enums/search-by.enum';

import { Movie } from '../../../core/interfaces/movie/movie.interface';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';

import { MoviesApi } from '../../../core/api/movies/movies-api.class';

export const loadMovie = (id: number): LoadMovieAction => {
  return {
    type: LOAD_MOVIE,
    payload: MoviesApi.getById(id),
  };
};

export const loadMovieByGenre = (genre: string): LoadMoviesByGenreAction => {
  return {
    type: LOAD_MOVIES_BY_GENRE,
    payload: MoviesApi.getAll({
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

export type ViewMoviePageActionTypes =
  | LoadMovieAction
  | LoadMoviePendingAction
  | LoadMovieFulfilledAction
  | LoadMovieRejectedAction
  | LoadMoviesByGenreAction
  | LoadMoviesByGenrePendingAction
  | LoadMoviesByGenreFulfilledAction
  | LoadMoviesByGenreRejectedAction;
