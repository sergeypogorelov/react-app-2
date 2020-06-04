import './movie-search.component.scss';

import React, {
  FunctionComponent,
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
} from 'react';

import { MovieSearchProps } from './movie-search-props.interface';

export const MovieSearch: FunctionComponent<MovieSearchProps> = ({
  controlLabeledBy,
  onSearchFormSubmit,
}) => {
  const ariaLabeledBy = controlLabeledBy ? controlLabeledBy.join(' ') : null;

  const [searchValue, setSearchValue] = useState('');

  const handleSearchFormSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (onSearchFormSubmit) {
        onSearchFormSubmit(searchValue);
      }
    },
    [searchValue]
  );

  const handleSearchChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => setSearchValue(ev.target.value),
    []
  );

  return (
    <form className="movie-search" onSubmit={handleSearchFormSubmit}>
      <input
        className="movie-search-control"
        aria-labelledby={ariaLabeledBy}
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button className="movie-search-button">Search</button>
    </form>
  );
};
