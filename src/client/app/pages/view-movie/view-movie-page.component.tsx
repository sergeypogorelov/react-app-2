import './view-movie-page.component.scss';

import React, { FunctionComponent, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { AppState } from '../../redux/reducers';
import { ViewMoviePageProps } from './view-movie-page-props.interface';

import {
  loadMovie,
  loadMovieByGenre,
} from '../../redux/actions/view-movie-page/view-movie-page';

import { Header } from '../../shared/header/header.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';
import { MovieDetails } from './movie-details/movie-details.component';

const ViewMoviePageFunc: FunctionComponent<ViewMoviePageProps> = ({
  movie,
  moviesByGenre,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovie(284054));
  }, []);

  useEffect(() => {
    if (movie) {
      dispatch(loadMovieByGenre(movie.genres[0]));
    }
  }, [movie]);

  return (
    <div className="search-movie-page">
      <Header>
        <MovieDetails movie={movie} />
      </Header>
      <InfoContainer>
        {movie && movie.genres[0] && (
          <InfoText>Movies by {movie.genres[0]} genre</InfoText>
        )}
      </InfoContainer>
      <MoviesList movies={moviesByGenre} />
    </div>
  );
};

const mapStateToProps = (state: AppState): ViewMoviePageProps => {
  return {
    ...state.viewMoviePage,
  };
};

export const ViewMoviePage = connect(mapStateToProps)(ViewMoviePageFunc);
