import './switch.component.scss';

import React, { FunctionComponent } from 'react';

export const Switch: FunctionComponent<{}> = () => {
  return (
    <div className="switch d-flex">
      <button className="switch-item switch-item-left active">Title</button>
      <button className="switch-item switch-item-right">Genre</button>
    </div>
  );
};
