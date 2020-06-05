import './movie-item.component.scss';

import React, { FunctionComponent } from 'react';

import { MovieItemProps } from './movie-item-props.interface';

import { Image } from '../../image/image.component';

export const MovieItem: FunctionComponent<MovieItemProps> = ({ item }) => {
  const { release_date, poster_path, title, tagline } = item;

  const releaseDate = new Date(release_date).getFullYear();

  return (
    <div className="movie-item">
      <Image className="movie-item-poster" src={poster_path} />
      <div className="movie-item-top">
        <h3 className="movie-item-title mb-0">{title}</h3>
        <label className="movie-item-year mb-0">{releaseDate}</label>
      </div>
      <p className="movie-item-description">{tagline}</p>
    </div>
  );
};
