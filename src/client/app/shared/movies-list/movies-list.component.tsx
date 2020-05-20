import './movies-list.component.scss';

import React, { FunctionComponent } from 'react';

const killBillModule = require('../../../assets/images/kill-bill.png');

export const MoviesList: FunctionComponent<{}> = (props) => {
  return (
    <div className="movies-list">
      <div className="row">
        <div className="col-4">
          <div className="movie-item">
            <img className="movie-item-poster" src={killBillModule.default} />
            <div className="movie-item-top d-flex justify-content-between align-items-center">
              <h3 className="movie-item-title mb-0">Kill Bill: Vol 2</h3>
              <label className="movie-item-year mb-0">1994</label>
            </div>
            <p className="movie-item-description">Oscar winning movie</p>
          </div>
        </div>
      </div>
    </div>
  );
};
