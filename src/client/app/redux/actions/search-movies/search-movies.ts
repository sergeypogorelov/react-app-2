import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';
import { moviesApiInstance } from '../../../core/api/movies/movies-api.class';
import { DataRequestQueryParams } from '../../../core/interfaces/common/data-request-query-params.interface';
import { SEARCH_MOVIES } from '../action-types';

export const searchMovies = (
  search: string,
  searchBy?: SearchBy,
  sortBy?: SortBy
) => {
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
