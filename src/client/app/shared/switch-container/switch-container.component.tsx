import './switch-container.component.scss';

import React, { FunctionComponent } from 'react';

import { Switch } from './switch/switch.component';

export const SwitchContainer: FunctionComponent<{}> = (props) => {
  return (
    <div className="switch-container d-flex align-items-center">
      <label className="switch-container-label my-0">{props.children}</label>
      <Switch />
    </div>
  );
};
