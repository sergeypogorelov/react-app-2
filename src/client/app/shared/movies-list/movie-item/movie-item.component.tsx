import './movie-item.component.scss';

import React, { FunctionComponent } from 'react';

import { imageKillBill } from '../../../core/constants/assets-urls';

export const MovieItem: FunctionComponent<{}> = () => {
  return (
    <div className="movie-item">
      <img className="movie-item-poster" src={imageKillBill} />
      <div className="movie-item-top">
        <h3 className="movie-item-title mb-0">Kill Bill: Vol 2</h3>
        <label className="movie-item-year mb-0">1994</label>
      </div>
      <p className="movie-item-description">Oscar winning movie</p>
    </div>
  );
};
