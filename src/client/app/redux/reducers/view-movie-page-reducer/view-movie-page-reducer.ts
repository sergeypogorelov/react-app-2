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

export const viewMoviePageState: ViewMoviePageState = {
  movie: null,
  moviesByGenre: [],
};

export const viewMoviePageReducer = (
  state = viewMoviePageState,
  action: ViewMoviePageActionTypes
): ViewMoviePageState => {
  switch (action.type) {
    case LOAD_MOVIE_FULFILLED:
      return {
        ...state,
        movie: (action as LoadMovieFulfilledAction).payload,
      };
    case LOAD_MOVIES_BY_GENRE_FULFILLED:
      return {
        ...state,
        moviesByGenre: (action as LoadMoviesByGenreFulfilledAction).payload
          .data,
      };
    default:
      return state;
  }
};
