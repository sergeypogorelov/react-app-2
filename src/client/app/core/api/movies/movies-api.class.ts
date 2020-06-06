import axios from 'axios';

import { endpoints } from '../../constants/endpoints';

import { DataRequestQueryParams } from '../../interfaces/common/data-request-query-params.interface';
import { MoviesResponse } from '../../interfaces/movie/movies-response.interface';
import { Movie } from '../../interfaces/movie/movie.interface';

import { Utils } from '../../helpers/utils/utils.class';

class MoviesApi {
  async getAll(queryParams?: DataRequestQueryParams): Promise<MoviesResponse> {
    const response = await axios.get(endpoints.herokuMovies, {
      params: queryParams,
    });

    return response.data;
  }

  async getById(movieId: number): Promise<Movie> {
    if (typeof movieId === 'undefined') {
      throw new Error('Movie id is not specified.');
    }

    const url = Utils.stringInterpolate(endpoints.herokuMovie, {
      movieId: String(movieId),
    });

    const response = await axios.get(url);

    return response.data;
  }
}

export const moviesApi = new MoviesApi();
