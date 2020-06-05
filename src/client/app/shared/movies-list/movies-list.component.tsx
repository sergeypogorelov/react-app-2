import './movies-list.component.scss';

import React, { FunctionComponent } from 'react';

import { MoviesListProps } from './movies-list-props.interface';

import { MovieItem } from './movie-item/movie-item.component';

export const MoviesList: FunctionComponent<MoviesListProps> = (props) => {
  return (
    <div className="movies-list">
      {props.movies.length > 0 ? (
        <div className="row">
          {props.movies.map((i) => (
            <div className="col-4 movie-wrapper" key={i.id}>
              <MovieItem item={i} />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="movies-list-empty">No movies found</h3>
      )}
    </div>
  );
};
