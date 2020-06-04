import axios, { AxiosStatic } from 'axios';

import { endpoints } from '../../constants/endpoints';

import { DataRequestQueryParams } from '../../interfaces/common/data-request-query-params.interface';
import { MoviesResponse } from '../../interfaces/movie/movies-response.interface';
import { Movie } from '../../interfaces/movie/movie.interface';

import { Utils } from '../../helpers/utils/utils.class';

export class MoviesApi {
  constructor(private _axios: AxiosStatic) {}

  async getAll(queryParams?: DataRequestQueryParams): Promise<MoviesResponse> {
    const response = await this._axios.get(endpoints.herokuMovies, {
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

    const response = await this._axios.get(url);

    return response.data;
  }
}

export const moviesApiInstance = new MoviesApi(axios);
