import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';

import { Movie } from '../../../core/interfaces/movie/movie.interface';

export interface MoviesPageState {
  searchBy: SearchBy;
  sortBy: SortBy;
  totalMovies: number;
  movies: Movie[];
}
