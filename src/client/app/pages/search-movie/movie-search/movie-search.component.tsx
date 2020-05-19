import './movie-search.component.scss';

import React, { FunctionComponent } from 'react';

export const MovieSearch: FunctionComponent<{}> = (props) => {
  return (
    <form className="movie-search">
      <input className="movie-search-control" />
      <button className="movie-search-button">Search</button>
    </form>
  );
};
