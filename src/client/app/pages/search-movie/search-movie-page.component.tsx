import './search-movie-page.component.scss';

import React from 'react';
import { connect } from 'react-redux';

import { urlFragments } from '../../core/constants/url-fragments';

import { AppState } from '../../redux/reducers';
import { SearchMoviePageProps } from './search-movie-page-props.interface';

import {
  searchMovies,
  changeSearch,
} from '../../redux/actions/search-movie-page/search-movie-page';

import { Utils } from '../../core/helpers/utils/utils.class';

import { Header } from '../../shared/header/header.component';
import { HeaderTitle } from '../../shared/header/header-title/header-title.component';
import { MovieSearch } from './movie-search/movie-search.component';
import { MovieSearchSwitch } from './movie-search-switch/movie-search-switch.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';
import { SearchMovieSort } from './search-movie-sort/search-movie-sort.component';

const headerTitleId = 'searchLabel';

class SearchMoviePageClass extends React.Component<SearchMoviePageProps> {
  componentDidMount() {
    const { dispatch, match } = this.props;

    dispatch(changeSearch(match.params.search));
  }

  componentDidUpdate(prevProps: SearchMoviePageProps) {
    const {
      search: currSearch,
      searchBy: currSearchBy,
      sortBy: currSortBy,
      dispatch,
    } = this.props;

    const {
      search: prevSearch,
      searchBy: prevSearchBy,
      sortBy: prevSortBy,
    } = prevProps;

    const currArr = [currSearch, currSearchBy, currSortBy];
    const prevArr = [prevSearch, prevSearchBy, prevSortBy];

    if (!Utils.arrayEqual(currArr, prevArr)) {
      if (currSearch) {
        this.redirectToNewSearch(currSearch);

        dispatch(searchMovies(currSearch, currSearchBy, currSortBy));
      }
    }
  }

  render() {
    const { movies, totalMovies, match } = this.props;

    return (
      <div className="search-movie-page">
        <Header>
          <HeaderTitle id={headerTitleId}>FIND YOUR MOVIE</HeaderTitle>
          <MovieSearch
            search={match.params.search}
            controlLabeledBy={[headerTitleId]}
          />
          <MovieSearchSwitch />
        </Header>
        <InfoContainer>
          <InfoText>{totalMovies} movies found</InfoText>
          <SearchMovieSort />
        </InfoContainer>
        <MoviesList movies={movies} />
      </div>
    );
  }

  private redirectToNewSearch(newSearch: string) {
    newSearch = newSearch || '';

    this.props.history.push(
      `/${urlFragments.searchMovie}/${encodeURIComponent(newSearch)}`
    );
  }
}

const mapStateToProps = (state: AppState): SearchMoviePageProps => {
  return {
    ...state.searchMoviePage,
  };
};

const SearchMoviePage = connect(mapStateToProps)(SearchMoviePageClass);

export default SearchMoviePage;
