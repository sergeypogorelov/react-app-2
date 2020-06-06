import { Movie } from '../../../core/interfaces/movie/movie.interface';

export interface ViewMoviePageState {
  movie: Movie;
  moviesByGenre: Movie[];
}
