import './header-title.component.scss';

import React, { FunctionComponent } from 'react';

import { HeaderTitleProps } from './header-title-props.interface';

export const HeaderTitle: FunctionComponent<HeaderTitleProps> = ({
  children,
  id,
}) => {
  return (
    <h2 className="header-title" id={id}>
      {children}
    </h2>
  );
};
