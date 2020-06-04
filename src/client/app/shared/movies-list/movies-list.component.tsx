import './movies-list.component.scss';

import React, { FunctionComponent, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { MoviesListProps } from './movies-list-props.interface';
import { AppState } from '../../redux/interfaces/app-state.interface';

import { searchMovies } from '../../redux/actions/search-movies/search-movies';

import { MovieItem } from './movie-item/movie-item.component';

const MoviesListFunc: FunctionComponent<MoviesListProps> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies('Kill Bill'));
  }, []);

  return (
    <div className="movies-list">
      {props.movies.length > 0 ? (
        <div className="row">
          {props.movies.map((i) => (
            <div className="col-4 movie-wrapper" key={i.id}>
              <MovieItem />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="movies-list-empty">No movies found</h3>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState): MoviesListProps => {
  return {
    movies: state.moviesPage.movies,
  };
};

export const MoviesList = connect(mapStateToProps)(MoviesListFunc);
