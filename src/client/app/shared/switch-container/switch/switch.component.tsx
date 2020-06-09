import './switch.component.scss';

import React, { FunctionComponent, useCallback } from 'react';
import classNames from 'classnames';

import { SwitchProps } from './switch-props.interface';

export const Switch: FunctionComponent<SwitchProps> = ({
  currentValue,
  left,
  right,
  onChange,
}) => {
  const activeClassNames = {
    left: classNames({
      'switch-item': true,
      'switch-item-left': true,
      active: left.value === currentValue,
    }),
    right: classNames({
      'switch-item': true,
      'switch-item-right': true,
      active: right.value === currentValue,
    }),
  };

  const handleLeftButtonClick = useCallback(() => {
    if (currentValue !== left.value) {
      onChange(left.value);
    }
  }, [currentValue, left]);

  const handleRightButtonCallback = useCallback(() => {
    if (currentValue !== right.value) {
      onChange(right.value);
    }
  }, [currentValue, right]);

  return (
    <div className="switch d-flex">
      <button
        className={activeClassNames.left}
        type="button"
        onClick={handleLeftButtonClick}
      >
        {left.label}
      </button>
      <button
        className={activeClassNames.right}
        type="button"
        onClick={handleRightButtonCallback}
      >
        {right.label}
      </button>
    </div>
  );
};
