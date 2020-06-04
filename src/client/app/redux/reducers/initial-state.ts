import { AppState } from '../interfaces/app-state.interface';
import { SearchBy } from '../../core/enums/search-by.enum';
import { SortBy } from '../../core/enums/sort-by.enum';

export const initialState: AppState = {
  moviesPage: {
    searchBy: SearchBy.Title,
    sortBy: SortBy.ReleaseData,
    totalMovies: 0,
    movies: [],
  },
};
