import './view-movie-page.component.scss';

import React, { FunctionComponent } from 'react';

import { Header } from '../../shared/header/header.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';

import { MovieDetails } from './movie-details/movie-details.component';

export const ViewMoviePage: FunctionComponent<{}> = () => {
  return (
    <div className="search-movie-page">
      <Header>
        <MovieDetails />
      </Header>
      <InfoContainer>
        <InfoText>Movies by Drama genre</InfoText>
      </InfoContainer>
      <MoviesList />
    </div>
  );
};
