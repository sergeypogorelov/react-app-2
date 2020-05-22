import './movies-list.component.scss';

import React, { FunctionComponent } from 'react';

import { MovieItem } from './movie-item/movie-item.component';

export const MoviesList: FunctionComponent<{}> = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="movies-list">
      <div className="row">
        {items.map((i) => (
          <div className="col-4 movie-wrapper" key={i}>
            <MovieItem />
          </div>
        ))}
      </div>
    </div>
  );
};
