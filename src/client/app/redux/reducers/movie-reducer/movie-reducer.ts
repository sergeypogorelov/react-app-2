import { MoviePageState } from '../../interfaces/movie-page/movie-page-state.interface';
import {
  ViewMovieActionTypes,
  LoadMoviesByGenreFulfilledAction,
} from '../../actions/view-movie/view-movie';
import {
  LOAD_MOVIE_FULFILLED,
  LOAD_MOVIES_BY_GENRE_FULFILLED,
} from '../../actions/action-types';
import { LoadMovieFulfilledAction } from '../../actions/view-movie/view-movie';

export const moviePageState: MoviePageState = {
  movie: null,
  movies: [],
};

export const movieReducer = (
  state = moviePageState,
  action: ViewMovieActionTypes
): MoviePageState => {
  switch (action.type) {
    case LOAD_MOVIE_FULFILLED:
      return {
        ...state,
        movie: (action as LoadMovieFulfilledAction).payload,
      };
    case LOAD_MOVIES_BY_GENRE_FULFILLED:
      return {
        ...state,
        movies: (action as LoadMoviesByGenreFulfilledAction).payload.data,
      };
    default:
      return state;
  }
};
