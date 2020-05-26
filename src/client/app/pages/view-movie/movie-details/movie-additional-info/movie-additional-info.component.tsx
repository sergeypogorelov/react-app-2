import './movie-additional-info.component.scss';

import React, { FunctionComponent } from 'react';

import { MovieAdditionalInfoProps } from './movie-additional-info-props.interface';

export const MovieAdditionalInfo: FunctionComponent<MovieAdditionalInfoProps> = ({
  value,
  unit,
}) => {
  return (
    <div className="movie-additional-info">
      <span className="movie-additional-info-value">{value}</span>
      <span className="movie-additional-info-unit">{unit}</span>
    </div>
  );
};
