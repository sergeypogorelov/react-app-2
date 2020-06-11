import './header.component.scss';

import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { urlFragments } from '../../core/constants/url-fragments';

import { HeaderProps } from './header-props.interface';

import { TitleMain } from '../title-main/title-main.component';

export const Header: FunctionComponent<HeaderProps> = ({
  children,
  search,
}) => {
  return (
    <div className="header">
      <div className="header-logo">
        <TitleMain />
      </div>
      {search && (
        <Link
          className="header-search"
          to={`/${urlFragments.searchMovie}/${search}`}
        />
      )}
      <div className="header-content">{children}</div>
    </div>
  );
};
