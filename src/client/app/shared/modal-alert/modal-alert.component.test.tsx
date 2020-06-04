import React from 'react';
import renderer from 'react-test-renderer';

import { ModalAlertProps } from './modal-alert-props.interface';
import { ModalAlert } from './modal-alert.component';

function createTree(props?: Partial<ModalAlertProps>, children?: any) {
  if (!props) {
    props = {};
  }

  const defProps: ModalAlertProps = {
    onClose: jest.fn(),
  };

  const finalProps = {
    ...defProps,
    ...props,
  };

  return renderer.create(<ModalAlert {...finalProps}>{children}</ModalAlert>);
}

describe('ModalAlert component', () => {
  const testChildren = 'test';

  it('should render correctly without props and children', () => {
    const tree = createTree().toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly without props and with children', () => {
    const tree = createTree(null, testChildren).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with title specified and children', () => {
    const tree = createTree({ title: 'test-title' }, testChildren).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with zIndex specified and children', () => {
    const tree = createTree({ zIndex: 101 }, testChildren).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
