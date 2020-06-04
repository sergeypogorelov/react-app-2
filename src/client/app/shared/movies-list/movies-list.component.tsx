import './movies-list.component.scss';

import React, { FunctionComponent } from 'react';

import { MovieItem } from './movie-item/movie-item.component';

export const MoviesList: FunctionComponent<{}> = () => {
  const items: number[] = [];

  return (
    <div className="movies-list">
      {items.length > 0 ? (
        <div className="row">
          {items.map((i) => (
            <div className="col-4 movie-wrapper" key={i}>
              <MovieItem />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="movies-list-empty">No movies found</h3>
      )}
    </div>
  );
};
