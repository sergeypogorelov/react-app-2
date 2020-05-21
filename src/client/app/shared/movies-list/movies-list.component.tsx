import './movies-list.component.scss';

import React, { FunctionComponent } from 'react';

import { MovieItem } from './movie-item/movie-item.component';

export const MoviesList: FunctionComponent<{}> = (props) => {
  return (
    <div className="movies-list">
      <div className="row">
        <div className="col-4 movie-wrapper">
          <MovieItem />
        </div>
        <div className="col-4 movie-wrapper">
          <MovieItem />
        </div>
        <div className="col-4 movie-wrapper">
          <MovieItem />
        </div>
        <div className="col-4 movie-wrapper">
          <MovieItem />
        </div>
        <div className="col-4 movie-wrapper">
          <MovieItem />
        </div>
        <div className="col-4 movie-wrapper">
          <MovieItem />
        </div>
      </div>
    </div>
  );
};
