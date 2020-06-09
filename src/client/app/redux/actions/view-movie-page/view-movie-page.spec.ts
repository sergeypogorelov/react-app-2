import { LOAD_MOVIE, LOAD_MOVIES_BY_GENRE } from '../action-types';

import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';
import { Movie } from '../../../core/interfaces/movie/movie.interface';

import { MoviesApi } from '../../../core/api/movies/movies-api.class';

import { loadMovie, loadMovieByGenre } from './view-movie-page';

jest.mock('../../../core/api/movies/movies-api.class');

describe('view movie page actions', () => {
  describe('loadMovie action', () => {
    it('should return result correctly', (doneFn) => {
      const correctResponse: Movie = {
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

      MoviesApi.getById = jest.fn().mockResolvedValue(correctResponse);

      const result = loadMovie(0);

      expect(result.type).toBe(LOAD_MOVIE);

      result.payload
        .then((response) => expect(response).toBe(correctResponse))
        .catch(() => fail())
        .finally(() => doneFn());
    });
  });

  describe('loadMovieByGenre action', () => {
    it('should return result correctly', (doneFn) => {
      const genre = 'genre';
      const correctResponse: MoviesResponse = {
        data: [],
        total: 0,
        offset: 0,
        limit: 0,
      };

      MoviesApi.getAll = jest.fn().mockResolvedValue(correctResponse);

      const result = loadMovieByGenre(genre);

      expect(result.type).toBe(LOAD_MOVIES_BY_GENRE);

      result.payload
        .then((response) => expect(response).toBe(correctResponse))
        .catch(() => fail())
        .finally(() => doneFn());
    });
  });
});
