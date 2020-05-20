import './info-text.component.scss';

import React, { FunctionComponent } from 'react';

export const InfoText: FunctionComponent<{}> = (props) => {
  return <p className="info-text">{props.children}</p>;
};
