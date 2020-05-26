import './header.component.scss';

import React, { FunctionComponent } from 'react';

import { TitleMain } from '../title-main/title-main.component';

export const Header: FunctionComponent<{}> = ({ children }) => {
  return (
    <div className="header">
      <div className="header-logo">
        <TitleMain />
      </div>
      <div className="header-content">{children}</div>
    </div>
  );
};
