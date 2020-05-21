import './view-movie-page.component.scss';

import React, { FunctionComponent } from 'react';

import { Header } from '../../shared/header/header.component';
import { HeaderTitle } from '../../shared/header/header-title/header-title.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';

const killBillModule = require('../../../assets/images/kill-bill.png');

export const ViewMoviePage: FunctionComponent<{}> = (props) => {
  return (
    <div className="search-movie-page">
      <Header>
        <div className="movie-details d-flex">
          <img className="movie-details-poster" src={killBillModule.default} />
          <div className="movie-details-info">
            <div className="movie-details-title d-flex align-items-center">
              <HeaderTitle>Kill Bill: Vol 2</HeaderTitle>
              <div className="movie-details-rating">4.3</div>
            </div>
            <div className="movie-details-subtitle">Oscar winning Movie</div>
            <div className="movie-details-additional">
              <div className="movie-details-additional-item">
                <span className="movie-details-additional-value">1994</span>
                <span className="movie-details-additional-unit">year</span>
              </div>
              <div className="movie-details-additional-item">
                <span className="movie-details-additional-value">154</span>
                <span className="movie-details-additional-unit">min</span>
              </div>
            </div>
            <div className="movie-details-description">
              Pulp Fiction is a 1994 American crime film written and directed by
              Quentin Tarantino; it is based on a story by Tarantino and Roger
              Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis,
              Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories
              of criminal Los Angeles. The film's title refers to the pulp
              magazines and hardboiled crime novels popular during the mid-20th
              century, known for their graphic violence and punchy dialogue.
            </div>
          </div>
        </div>
      </Header>
      <InfoContainer>
        <InfoText>Movies by Drama genre</InfoText>
      </InfoContainer>
      <MoviesList />
    </div>
  );
};
