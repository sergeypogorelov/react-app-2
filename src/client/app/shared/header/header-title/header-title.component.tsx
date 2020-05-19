import './header-title.component.scss';

import React, { FunctionComponent } from 'react';

export const HeaderTitle: FunctionComponent<{}> = (props) => {
  return <h2 className="header-title mb-0">{props.children}</h2>;
};
