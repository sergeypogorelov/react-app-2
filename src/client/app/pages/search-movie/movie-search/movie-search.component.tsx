import './movie-search.component.scss';

import React, {
  FunctionComponent,
  useCallback,
  ChangeEvent,
  FormEvent,
} from 'react';

import { MovieSearchProps } from './movie-search-props.interface';

export const MovieSearch: FunctionComponent<MovieSearchProps> = ({
  search,
  controlLabeledBy,
  onSearchFormSubmit,
  onSearchValueChange,
}) => {
  const ariaLabeledBy = controlLabeledBy ? controlLabeledBy.join(' ') : null;

  const handleSearchFormSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (onSearchFormSubmit) {
        onSearchFormSubmit(search);
      }
    },
    [onSearchFormSubmit, search]
  );

  const handleSearchChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => onSearchValueChange(ev.target.value),
    [onSearchValueChange]
  );

  return (
    <form className="movie-search" onSubmit={handleSearchFormSubmit}>
      <input
        className="movie-search-control"
        aria-labelledby={ariaLabeledBy}
        value={search}
        onChange={handleSearchChange}
      />
      <button className="movie-search-button">Search</button>
    </form>
  );
};
