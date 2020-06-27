import React from 'react';
import { connect } from 'react-redux';

import { SearchBy } from '../../../core/enums/search-by.enum';

import { AppState } from '../../../redux/reducers';
import { SwitchProps } from '../../../shared/switch-container/switch/switch-props.interface';
import { MovieSearchSwitchProps } from './movie-search-switch-props.interface';

import { changeSearchBy } from '../../../redux/actions/search-movie-page/search-movie-page';

import { SwitchContainer } from '../../../shared/switch-container/switch-container.component';

class MovieSearchSwitchClass extends React.Component<MovieSearchSwitchProps> {
  render() {
    const switchProps: SwitchProps = {
      currentValue: this.props.value,
      left: {
        label: 'Title',
        value: SearchBy.Title,
      },
      right: {
        label: 'Genre',
        value: SearchBy.Genres,
      },
      onChange: this.handleSwitchChagne,
    };

    return (
      <SwitchContainer switchProps={switchProps}>SEARCH BY</SwitchContainer>
    );
  }

  handleSwitchChagne = (newValue: string) => {
    this.props.dispatch(changeSearchBy(newValue as SearchBy));
  };
}

const mapStateToProps = (state: AppState): MovieSearchSwitchProps => {
  return {
    value: state.searchMoviePage.searchBy,
  };
};

export const MovieSearchSwitch = connect(mapStateToProps)(
  MovieSearchSwitchClass
);
