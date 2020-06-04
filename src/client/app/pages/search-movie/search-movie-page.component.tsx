import './search-movie-page.component.scss';

import React, { FunctionComponent, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { AppState } from '../../redux/reducers';
import { SearchMoviePageProps } from './search-movie-page-props.interface';

import { searchMovies } from '../../redux/actions/search-movies/search-movies';

import { Header } from '../../shared/header/header.component';
import { HeaderTitle } from '../../shared/header/header-title/header-title.component';
import { MovieSearch } from './movie-search/movie-search.component';
import { MovieSearchSwitch } from './movie-search-switch/movie-search-switch.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { SwitchContainer } from '../../shared/switch-container/switch-container.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';

const SearchMoviePageFunc: FunctionComponent<SearchMoviePageProps> = ({
  movies,
  totalMovies,
}) => {
  const headerTitleId = 'searchLabel';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies('Kill Bill'));
  }, []);

  return (
    <div className="search-movie-page">
      <Header>
        <HeaderTitle id={headerTitleId}>FIND YOUR MOVIE</HeaderTitle>
        <MovieSearch controlLabeledBy={[headerTitleId]} />
        <MovieSearchSwitch />
      </Header>
      <InfoContainer>
        <InfoText>{totalMovies} movies found</InfoText>
        <SwitchContainer>SORT BY</SwitchContainer>
      </InfoContainer>
      <MoviesList movies={movies} />
    </div>
  );
};

const mapStateToProps = (state: AppState): SearchMoviePageProps => {
  return {
    ...state.moviesPage,
  };
};

export const SearchMoviePage = connect(mapStateToProps)(SearchMoviePageFunc);
