import './movie-search.component.scss';

import React, { FunctionComponent } from 'react';

import { MovieSearchProps } from './movie-search-props.interface';

export const MovieSearch: FunctionComponent<MovieSearchProps> = ({
  controlLabeledBy,
}) => {
  const ariaLabeledBy = controlLabeledBy ? controlLabeledBy.join(' ') : null;

  return (
    <form className="movie-search">
      <input className="movie-search-control" aria-labelledby={ariaLabeledBy} />
      <button className="movie-search-button">Search</button>
    </form>
  );
};
