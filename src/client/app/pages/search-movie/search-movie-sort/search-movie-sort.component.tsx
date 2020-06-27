import React from 'react';
import { connect } from 'react-redux';

import { SortBy } from '../../../core/enums/sort-by.enum';

import { AppState } from '../../../redux/reducers';
import { SwitchProps } from '../../../shared/switch-container/switch/switch-props.interface';
import { SearchMovieSortProps } from './search-movie-sort-props.interface';

import { changeSortBy } from '../../../redux/actions/search-movie-page/search-movie-page';

import { SwitchContainer } from '../../../shared/switch-container/switch-container.component';

class SearchMovieSortClass extends React.Component<SearchMovieSortProps> {
  render() {
    const switchProps: SwitchProps = {
      currentValue: this.props.value,
      left: {
        label: 'Release Date',
        value: SortBy.ReleaseData,
      },
      right: {
        label: 'Rating',
        value: SortBy.Rating,
      },
      onChange: this.handleSwitchChagne,
    };

    return <SwitchContainer switchProps={switchProps}>SORT BY</SwitchContainer>;
  }

  handleSwitchChagne = (newValue: string) => {
    this.props.dispatch(changeSortBy(newValue as SortBy));
  };
}

const mapStateToProps = (state: AppState): SearchMovieSortProps => {
  return {
    value: state.searchMoviePage.sortBy,
  };
};

export const SearchMovieSort = connect(mapStateToProps)(SearchMovieSortClass);
