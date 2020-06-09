import './switch-container.component.scss';

import React, { FunctionComponent } from 'react';

import { Switch } from './switch/switch.component';

import { SwitchContainerProps } from './switch-container-props.interface';

export const SwitchContainer: FunctionComponent<SwitchContainerProps> = ({
  switchProps,
  children,
}) => {
  return (
    <div className="switch-container d-flex align-items-center">
      <label className="switch-container-label my-0">{children}</label>
      <Switch {...switchProps} />
    </div>
  );
};
