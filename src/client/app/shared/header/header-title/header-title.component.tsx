import './header-title.component.scss';

import React, { FunctionComponent } from 'react';

export const HeaderTitle: FunctionComponent<{}> = (props) => {
  return <h2 className="header-title">{props.children}</h2>;
};
