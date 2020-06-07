import {
  LOAD_MOVIE_FULFILLED,
  LOAD_MOVIES_BY_GENRE_FULFILLED,
} from '../../actions/action-types';

import { Movie } from '../../../core/interfaces/movie/movie.interface';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';
import { ViewMoviePageState } from '../../interfaces/view-movie-page-state/view-movie-page-state.interface';
import {
  LoadMovieFulfilledAction,
  LoadMoviesByGenreFulfilledAction,
} from '../../actions/view-movie-page/view-movie-page';

import { Utils } from '../../../core/helpers/utils/utils.class';

import {
  viewMoviePageState,
  viewMoviePageReducer,
} from './view-movie-page-reducer';

describe('view movie page reducer', () => {
  let state: ViewMoviePageState;

  beforeEach(() => {
    state = Utils.deepCopy(viewMoviePageState);
  });

  it('should handle correctly action LOAD_MOVIE_FULFILLED', () => {
    const movie: Movie = {
      id: 0,
      title: 'title',
      tagline: 'tagline',
      vote_average: 9,
      vote_count: 10,
      release_date: '2019-08-06',
      poster_path: 'poster_path',
      overview: 'overview',
      budget: 100,
      revenue: 1000,
      runtime: 155,
      genres: ['Genre'],
    };

    const action: LoadMovieFulfilledAction = {
      type: LOAD_MOVIE_FULFILLED,
      payload: movie,
    };

    const newState = viewMoviePageReducer(state, action);

    expect(newState.movie).toBe(movie);
  });

  it('should handle correctly action LOAD_MOVIES_BY_GENRE_FULFILLED', () => {
    const moviesResponse: MoviesResponse = {
      data: [],
      total: 0,
      offset: 0,
      limit: 0,
    };

    const action: LoadMoviesByGenreFulfilledAction = {
      type: LOAD_MOVIES_BY_GENRE_FULFILLED,
      payload: moviesResponse,
    };

    const newState = viewMoviePageReducer(state, action);

    expect(newState.moviesByGenre).toBe(moviesResponse.data);
  });
});
