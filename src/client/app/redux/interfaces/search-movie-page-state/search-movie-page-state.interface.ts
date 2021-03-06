import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';

import { Movie } from '../../../core/interfaces/movie/movie.interface';

export interface SearchMoviePageState {
  search: string;
  searchBy: SearchBy;
  sortBy: SortBy;
  totalMovies: number;
  movies: Movie[];
}
