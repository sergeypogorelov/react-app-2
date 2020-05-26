import './footer.component.scss';

import React, { FunctionComponent } from 'react';

import { TitleMain } from '../../shared/title-main/title-main.component';

export const Footer: FunctionComponent<{}> = () => {
  return (
    <footer className="footer d-flex justify-content-center align-items-center">
      <TitleMain />
    </footer>
  );
};
