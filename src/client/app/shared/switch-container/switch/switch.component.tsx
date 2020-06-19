import './switch.component.scss';

import React from 'react';
import classNames from 'classnames';

import { SwitchProps } from './switch-props.interface';

export class Switch extends React.Component<SwitchProps> {
  render() {
    const { currentValue, left, right } = this.props;

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

    return (
      <div className="switch d-flex">
        <button
          className={activeClassNames.left}
          type="button"
          onClick={this.handleLeftButtonClick}
        >
          {left.label}
        </button>
        <button
          className={activeClassNames.right}
          type="button"
          onClick={this.handleRightButtonCallback}
        >
          {right.label}
        </button>
      </div>
    );
  }

  handleLeftButtonClick = () => {
    const { currentValue, left, onChange } = this.props;

    if (currentValue !== left.value) {
      onChange(left.value);
    }
  };

  handleRightButtonCallback = () => {
    const { currentValue, right, onChange } = this.props;

    if (currentValue !== right.value) {
      onChange(right.value);
    }
  };
}
