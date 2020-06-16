import './movie-search.component.scss';

import React, {
  FunctionComponent,
  FormEvent,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { connect, useDispatch } from 'react-redux';

import { MovieSearchProps } from './movie-search-props.interface';
import { AppState } from '../../../redux/reducers';

import { changeSearch } from '../../../redux/actions/search-movie-page/search-movie-page';

const MovieSearchFunc: FunctionComponent<MovieSearchProps> = ({
  search,
  controlLabeledBy,
}) => {
  const ariaLabeledBy = controlLabeledBy ? controlLabeledBy.join(' ') : null;

  const dispatch = useDispatch();

  const controlRef = useRef(null);

  useEffect(() => {
    if (controlRef.current) {
      controlRef.current.value = search || '';
    }
  }, [search]);

  const handleSearchFormSubmit = useCallback(
    (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      dispatch(changeSearch(controlRef.current.value));
    },
    [controlRef]
  );

  return (
    <form className="movie-search" onSubmit={handleSearchFormSubmit}>
      <input
        className="movie-search-control"
        aria-labelledby={ariaLabeledBy}
        ref={controlRef}
      />
      <button className="movie-search-button">Search</button>
    </form>
  );
};

const mapStateToProps = (
  state: AppState,
  ownProps: MovieSearchProps
): MovieSearchProps => {
  return {
    ...ownProps,
    search: state.searchMoviePage.search,
  };
};

export const MovieSearch = connect(mapStateToProps)(MovieSearchFunc);
