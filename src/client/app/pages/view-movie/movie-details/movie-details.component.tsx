import './movie-details.component.scss';

import React, { FunctionComponent } from 'react';

import { imageKillBill } from '../../../core/constants/assets-urls';

import { MovieAdditionalInfoProps } from './movie-additional-info/movie-additional-info-props.interface';

import { HeaderTitle } from '../../../shared/header/header-title/header-title.component';
import { MovieAdditionalInfo } from './movie-additional-info/movie-additional-info.component';

export const MovieDetails: FunctionComponent<{}> = () => {
  const items: MovieAdditionalInfoProps[] = [
    {
      value: '1994',
      unit: 'year',
    },
    {
      value: '154',
      unit: 'min',
    },
  ];

  return (
    <div className="movie-details d-flex">
      <img className="movie-details-poster" src={imageKillBill} />
      <div className="movie-details-info">
        <div className="movie-details-title d-flex align-items-center">
          <HeaderTitle>Kill Bill: Vol 2</HeaderTitle>
          <div className="movie-details-rating">4.3</div>
        </div>
        <div className="movie-details-subtitle">Oscar winning Movie</div>
        <div className="movie-details-additional">
          {items.map((item, index) => (
            <MovieAdditionalInfo key={index} {...item} />
          ))}
        </div>
        <div className="movie-details-description">
          Pulp Fiction is a 1994 American crime film written and directed by
          Quentin Tarantino; it is based on a story by Tarantino and Roger
          Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim
          Roth, Ving Rhames, and Uma Thurman, it tells several stories of
          criminal Los Angeles. The film's title refers to the pulp magazines
          and hardboiled crime novels popular during the mid-20th century, known
          for their graphic violence and punchy dialogue.
        </div>
      </div>
    </div>
  );
};
