import './info-text.component.scss';

import React, { FunctionComponent } from 'react';

export const InfoText: FunctionComponent<{}> = ({ children }) => {
  return <p className="info-text">{children}</p>;
};
