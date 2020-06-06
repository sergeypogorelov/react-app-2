import { MoviesApi } from '../../../core/api/movies/movies-api.class';
import { searchMovies } from './search-movie-page';
import { SEARCH_MOVIES } from '../action-types';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';

jest.mock('../../../core/api/movies/movies-api.class');

describe('search movie page actions', () => {
  describe('searchMovies action', () => {
    it('should return result correctly', (doneFn) => {
      const correctResponse: MoviesResponse = {
        data: [],
        total: 0,
        offset: 0,
        limit: 0,
      };

      MoviesApi.getAll = jest.fn().mockResolvedValue(correctResponse);

      const result = searchMovies('test');

      expect(MoviesApi.getAll).toHaveBeenCalledTimes(1);

      expect(result.type).toBe(SEARCH_MOVIES);

      result.payload.then((response) => {
        expect(response).toBe(correctResponse);
        doneFn();
      });
    });
  });
});
