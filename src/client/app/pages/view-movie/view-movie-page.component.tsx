import './view-movie-page.component.scss';

import React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../redux/reducers';
import { ViewMoviePageProps } from './view-movie-page-props.interface';

import {
  loadMovie,
  loadMovieByGenre,
} from '../../redux/actions/view-movie-page/view-movie-page';

import { SSR } from '../../core/helpers/ssr/ssr.class';

import { Header } from '../../shared/header/header.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';
import { MovieDetails } from './movie-details/movie-details.component';

class ViewMoviePageClass extends React.Component<ViewMoviePageProps> {
  componentWillMount() {
    if (SSR.isOnClient || SSR.preventRequests) {
      return;
    }

    const { dispatch, match } = this.props;
    const loadMovieAction = loadMovie(+match.params.movieId);

    loadMovieAction.payload.then((movie) => {
      if (movie.id) {
        dispatch(loadMovieByGenre(movie.genres[0]));
      }
    });

    dispatch(loadMovieAction);
  }

  componentDidMount() {
    if (SSR.isBeingHydrated) {
      return;
    }

    const { dispatch, match } = this.props;

    dispatch(loadMovie(+match.params.movieId));
  }

  componentDidUpdate(prevProps: ViewMoviePageProps) {
    if (SSR.isBeingHydrated) {
      return;
    }

    const { match: currMatch, movie: currMovie, dispatch } = this.props;
    const { match: prevMatch, movie: prevMovie } = prevProps;

    if (currMatch.params.movieId !== prevMatch.params.movieId) {
      dispatch(loadMovie(+currMatch.params.movieId));
    }

    if (currMovie !== null && currMovie !== prevMovie) {
      dispatch(loadMovieByGenre(currMovie.genres[0]));
    }
  }

  render() {
    const { movie, movieNotFound, moviesByGenre, lastSearch } = this.props;

    if (movieNotFound) {
      return (
        <Header>
          <h3 className="text-center">Movie Not Found</h3>
        </Header>
      );
    }

    return (
      <div className="search-movie-page">
        <Header search={lastSearch} searchShown>
          <MovieDetails movie={movie} />
        </Header>
        <InfoContainer>
          {!movieNotFound && movie && movie.genres[0] && (
            <InfoText>Movies by {movie.genres[0]} genre</InfoText>
          )}
        </InfoContainer>
        <MoviesList movies={moviesByGenre} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): ViewMoviePageProps => {
  return {
    ...state.viewMoviePage,
    lastSearch: state.searchMoviePage.search,
  };
};

export const ViewMoviePage = connect(mapStateToProps)(ViewMoviePageClass);
