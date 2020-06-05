import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';

import { SortBy } from '../../../core/enums/sort-by.enum';

import { AppState } from '../../../redux/reducers';
import { SwitchProps } from '../../../shared/switch-container/switch/switch-props.interface';
import { SearchMovieSortProps } from './search-movie-sort-props.interface';

import { changeSortBy } from '../../../redux/actions/search-movies/search-movies';

import { SwitchContainer } from '../../../shared/switch-container/switch-container.component';

const SearchMovieSortFunc: FunctionComponent<SearchMovieSortProps> = ({
  value,
}) => {
  const dispatch = useDispatch();

  const handleSwitchChagne = useCallback(
    (newValue: string) => {
      dispatch(changeSortBy(newValue as SortBy));
    },
    [dispatch]
  );

  const switchProps: SwitchProps = {
    currentValue: value,
    left: {
      label: 'Release Date',
      value: SortBy.ReleaseData,
    },
    right: {
      label: 'Rating',
      value: SortBy.Rating,
    },
    onChange: handleSwitchChagne,
  };

  return <SwitchContainer switchProps={switchProps}>SORT BY</SwitchContainer>;
};

const mapStateToProps = (state: AppState): SearchMovieSortProps => {
  return {
    value: state.moviesPage.sortBy,
  };
};

export const SearchMovieSort = connect(mapStateToProps)(SearchMovieSortFunc);
