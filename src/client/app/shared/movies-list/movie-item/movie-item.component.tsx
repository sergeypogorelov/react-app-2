import './movie-item.component.scss';

import React, { FunctionComponent } from 'react';

import { imageKillBill } from '../../../core/constants/assets-urls';
import { MovieItemProps } from './movie-item-props.interface';

export const MovieItem: FunctionComponent<MovieItemProps> = ({ item }) => {
  const { release_date, poster_path, title, tagline } = item;
  const releaseDate = new Date(release_date);

  return (
    <div className="movie-item">
      <img className="movie-item-poster" src={imageKillBill} />
      <div className="movie-item-top">
        <h3 className="movie-item-title mb-0">{title}</h3>
        <label className="movie-item-year mb-0">
          {releaseDate.getFullYear()}
        </label>
      </div>
      <p className="movie-item-description">{tagline}</p>
    </div>
  );
};
