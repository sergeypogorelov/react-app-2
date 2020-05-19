import './movie-search-switch.component.scss';

import React, { FunctionComponent } from 'react';

import { Switch } from '../../../shared/switch/switch.component';

export const MovieSearchSwitch: FunctionComponent<{}> = (props) => {
  return (
    <div className="movie-search-switch d-flex align-items-center">
      <label className="switch-label my-0">SEARCH BY</label>
      <Switch />
    </div>
  );
};
