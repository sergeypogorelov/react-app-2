import './movie-details.component.scss';

import React, { FunctionComponent } from 'react';

import { imageKillBill } from '../../../core/constants/assets-urls';

import { MovieAdditionalInfoProps } from './movie-additional-info/movie-additional-info-props.interface';
import { MovieDetailsProps } from './movie-details-props.interface';

import { HeaderTitle } from '../../../shared/header/header-title/header-title.component';
import { MovieAdditionalInfo } from './movie-additional-info/movie-additional-info.component';

export const MovieDetails: FunctionComponent<MovieDetailsProps> = ({
  movie,
}) => {
  if (!movie) {
    return null;
  }

  const {
    release_date,
    runtime,
    poster_path,
    title,
    vote_average,
    tagline,
    overview,
  } = movie;

  const items: MovieAdditionalInfoProps[] = [
    {
      value: new Date(release_date).getFullYear().toString(),
      unit: 'year',
    },
    {
      value: runtime.toString(),
      unit: 'min',
    },
  ];

  return (
    <div className="movie-details d-flex">
      <img className="movie-details-poster" src={poster_path} />
      <div className="movie-details-info">
        <div className="movie-details-title d-flex align-items-center">
          <HeaderTitle>{title}</HeaderTitle>
          <div className="movie-details-rating">{vote_average}</div>
        </div>
        <div className="movie-details-subtitle">{tagline}</div>
        <div className="movie-details-additional">
          {items.map((item, index) => (
            <MovieAdditionalInfo key={index} {...item} />
          ))}
        </div>
        <div className="movie-details-description">{overview}</div>
      </div>
    </div>
  );
};
