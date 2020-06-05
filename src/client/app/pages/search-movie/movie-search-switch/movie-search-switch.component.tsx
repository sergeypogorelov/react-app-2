import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';

import { SearchBy } from '../../../core/enums/search-by.enum';

import { AppState } from '../../../redux/reducers';
import { SwitchProps } from '../../../shared/switch-container/switch/switch-props.interface';
import { MovieSearchSwitchProps } from './movie-search-switch-props.interface';

import { changeSearchBy } from '../../../redux/actions/search-movies/search-movies';

import { SwitchContainer } from '../../../shared/switch-container/switch-container.component';

const MovieSearchSwitchFunc: FunctionComponent<MovieSearchSwitchProps> = ({
  value,
}) => {
  const dispatch = useDispatch();

  const handleSwitchChagne = useCallback(
    (newValue: string) => {
      dispatch(changeSearchBy(newValue as SearchBy));
    },
    [dispatch]
  );

  const switchProps: SwitchProps = {
    currentValue: value,
    left: {
      label: 'Title',
      value: SearchBy.Title,
    },
    right: {
      label: 'Genre',
      value: SearchBy.Genres,
    },
    onChange: handleSwitchChagne,
  };

  return <SwitchContainer switchProps={switchProps}>SEARCH BY</SwitchContainer>;
};

const mapStateToProps = (state: AppState): MovieSearchSwitchProps => {
  return {
    value: state.moviesPage.searchBy,
  };
};

export const MovieSearchSwitch = connect(mapStateToProps)(
  MovieSearchSwitchFunc
);
