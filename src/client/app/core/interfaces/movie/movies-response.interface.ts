import { DataResponse } from '../common/data-response.interface';
import { Movie } from './movie.interface';

export interface MoviesResponse extends DataResponse<Movie> {}
