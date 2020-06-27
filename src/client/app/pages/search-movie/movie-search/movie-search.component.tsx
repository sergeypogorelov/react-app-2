import './movie-search.component.scss';

import React, { FormEvent, createRef } from 'react';
import { connect } from 'react-redux';

import { MovieSearchProps } from './movie-search-props.interface';
import { AppState } from '../../../redux/reducers';

import { changeSearch } from '../../../redux/actions/search-movie-page/search-movie-page';

class MovieSearchClass extends React.Component<MovieSearchProps> {
  componentDidMount() {
    this.updateControlValue();
  }

  componentDidUpdate(prevProps: MovieSearchProps) {
    this.updateControlValue(prevProps.search);
  }

  render() {
    const { controlLabeledBy } = this.props;

    const ariaLabeledBy = controlLabeledBy ? controlLabeledBy.join(' ') : null;

    return (
      <form className="movie-search" onSubmit={this.handleSearchFormSubmit}>
        <input
          className="movie-search-control"
          aria-labelledby={ariaLabeledBy}
          ref={this._controlRef}
        />
        <button className="movie-search-button">Search</button>
      </form>
    );
  }

  handleSearchFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    this.props.dispatch(changeSearch(this._controlRef.current.value));
  };

  private _controlRef = createRef<HTMLInputElement>();

  private updateControlValue(prevSearch?: string) {
    const currSearch = this.props.search;
    const controlRef = this._controlRef;

    if (
      controlRef.current &&
      (typeof prevSearch === 'undefined' || currSearch !== prevSearch)
    ) {
      controlRef.current.value = currSearch || '';
    }
  }
}

const mapStateToProps = (
  state: AppState,
  ownProps: MovieSearchProps
): MovieSearchProps => {
  return {
    ...ownProps,
    search: state.searchMoviePage.search,
  };
};

export const MovieSearch = connect(mapStateToProps)(MovieSearchClass);
