import './info-container.component.scss';

import React, { FunctionComponent } from 'react';

export const InfoContainer: FunctionComponent<{}> = ({ children }) => {
  return (
    <div className="info-container d-flex align-items-center justify-content-between">
      {children}
    </div>
  );
};
