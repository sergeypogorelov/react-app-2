import {
  LOAD_MOVIE_FULFILLED,
  LOAD_MOVIES_BY_GENRE_FULFILLED,
} from '../../actions/action-types';

import { ViewMoviePageState } from '../../interfaces/view-movie-page-state/view-movie-page-state.interface';

import {
  ViewMoviePageActionTypes,
  LoadMovieFulfilledAction,
  LoadMoviesByGenreFulfilledAction,
} from '../../actions/view-movie-page/view-movie-page';
import { Movie } from '../../../core/interfaces/movie/movie.interface';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';

export const viewMoviePageState: ViewMoviePageState = {
  movie: null,
  movieNotFound: false,
  moviesByGenre: [],
};

export const viewMoviePageReducer = (
  state = viewMoviePageState,
  action: ViewMoviePageActionTypes
): ViewMoviePageState => {
  let movie: Movie;
  let moviesResponse: MoviesResponse;

  switch (action.type) {
    case LOAD_MOVIE_FULFILLED:
      const loadMovieFulfilledAction = action as LoadMovieFulfilledAction;
      movie = loadMovieFulfilledAction.payload;

      if (!movie.id) {
        return {
          ...state,
          movie: null,
          movieNotFound: true,
          moviesByGenre: [],
        };
      }

      return {
        ...state,
        movie,
        movieNotFound: false,
      };
    case LOAD_MOVIES_BY_GENRE_FULFILLED:
      moviesResponse = (action as LoadMoviesByGenreFulfilledAction).payload;

      return {
        ...state,
        moviesByGenre: moviesResponse.data,
      };
    default:
      return state;
  }
};
