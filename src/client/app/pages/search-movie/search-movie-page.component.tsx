import './search-movie-page.component.scss';

import React, { FunctionComponent, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { urlFragments } from '../../core/constants/url-fragments';

import { AppState } from '../../redux/reducers';
import { SearchMoviePageProps } from './search-movie-page-props.interface';

import {
  searchMovies,
  changeSearch,
} from '../../redux/actions/search-movie-page/search-movie-page';

import { Header } from '../../shared/header/header.component';
import { HeaderTitle } from '../../shared/header/header-title/header-title.component';
import { MovieSearch } from './movie-search/movie-search.component';
import { MovieSearchSwitch } from './movie-search-switch/movie-search-switch.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';
import { SearchMovieSort } from './search-movie-sort/search-movie-sort.component';

const SearchMoviePageFunc: FunctionComponent<SearchMoviePageProps> = ({
  search,
  searchBy,
  sortBy,
  movies,
  totalMovies,
}) => {
  const headerTitleId = 'searchLabel';

  const dispatch = useDispatch();

  const history = useHistory();

  const { search: searchParam } = useParams();

  useEffect(() => {
    dispatch(changeSearch(searchParam));
  }, []);

  useEffect(() => {
    if (search) {
      history.push(
        `/${urlFragments.searchMovie}/${encodeURIComponent(search)}`
      );
      dispatch(searchMovies(search, searchBy, sortBy));
    }
  }, [dispatch, search, searchBy, sortBy]);

  return (
    <div className="search-movie-page">
      <Header>
        <HeaderTitle id={headerTitleId}>FIND YOUR MOVIE</HeaderTitle>
        <MovieSearch search={searchParam} controlLabeledBy={[headerTitleId]} />
        <MovieSearchSwitch />
      </Header>
      <InfoContainer>
        <InfoText>{totalMovies} movies found</InfoText>
        <SearchMovieSort />
      </InfoContainer>
      <MoviesList movies={movies} />
    </div>
  );
};

const mapStateToProps = (state: AppState): SearchMoviePageProps => {
  return {
    ...state.searchMoviePage,
  };
};

export const SearchMoviePage = connect(mapStateToProps)(SearchMoviePageFunc);
