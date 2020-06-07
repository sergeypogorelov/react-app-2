import { GLOBALS } from '../../../core/constants/globals';

import {
  SEARCH_MOVIES,
  CHANGE_SEARCH,
  CHANGE_SEARCH_BY,
  CHANGE_SORT_BY,
} from '../action-types';

import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';
import { SortOrder } from '../../../core/enums/sort-order.enum';

import { DataRequestQueryParams } from '../../../core/interfaces/common/data-request-query-params.interface';
import { MoviesResponse } from '../../../core/interfaces/movie/movies-response.interface';

import { MoviesApi } from '../../../core/api/movies/movies-api.class';

import {
  searchMovies,
  changeSearch,
  changeSearchBy,
  changeSortBy,
} from './search-movie-page';

jest.mock('../../../core/api/movies/movies-api.class');

describe('search movie page actions', () => {
  const search = 'search';

  describe('searchMovies action', () => {
    it('should return result correctly', (doneFn) => {
      const correctResponse: MoviesResponse = {
        data: [],
        total: 0,
        offset: 0,
        limit: 0,
      };

      MoviesApi.getAll = jest.fn().mockResolvedValue(correctResponse);

      const result = searchMovies(search);

      expect(result.type).toBe(SEARCH_MOVIES);

      result.payload
        .then((response) => expect(response).toBe(correctResponse))
        .catch(() => fail())
        .finally(() => doneFn());
    });

    it('should throw an exception if the search is not specified', () => {
      const callback = () => {
        searchMovies(null);
      };

      expect(callback).toThrow();
    });

    it('should override search and sort props if they are specified', () => {
      const searchBy = SearchBy.Genres;
      const sortBy = SortBy.Rating;

      MoviesApi.getAll = jest.fn();

      searchMovies(search, searchBy, sortBy);

      const params: DataRequestQueryParams = {
        search,
        searchBy,
        sortBy,
        limit: GLOBALS.moviesPerPage,
        sortOrder: SortOrder.Desc,
      };

      expect(MoviesApi.getAll).toHaveBeenCalledWith(params);
    });
  });

  describe('changeSearch action', () => {
    it('should return result correctly', () => {
      const result = changeSearch(search);

      expect(result.type).toBe(CHANGE_SEARCH);
      expect(result.payload).toBe(search);
    });
  });

  describe('changeSearchBy action', () => {
    it('should return result correctly', () => {
      const searchBy = SearchBy.Title;
      const result = changeSearchBy(searchBy);

      expect(result.type).toBe(CHANGE_SEARCH_BY);
      expect(result.payload).toBe(searchBy);
    });
  });

  describe('changeSortBy action', () => {
    it('should return result correctly', () => {
      const sortBy = SortBy.ReleaseData;
      const result = changeSortBy(sortBy);

      expect(result.type).toBe(CHANGE_SORT_BY);
      expect(result.payload).toBe(sortBy);
    });
  });
});
