import './title-main.component.scss';

import React, { FunctionComponent } from 'react';

export const TitleMain: FunctionComponent<{}> = () => {
  return (
    <p className="title-main m-0">
      <span className="title-main-prefix">netflix</span>
      <span>roulette</span>
    </p>
  );
};
