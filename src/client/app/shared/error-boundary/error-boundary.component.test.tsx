import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { ErrorBoundary } from './error-boundary.component';
import { ModalAlert } from '../modal-alert/modal-alert.component';

function renderComponent(children?: any): ShallowWrapper {
  return shallow(<ErrorBoundary>{children}</ErrorBoundary>);
}

describe('ErrorBoundary component', () => {
  const testChildrenId = 'test-children';
  const testChildren = <div id={testChildrenId}>test-children</div>;

  it('should render children by default', () => {
    const wrapper = renderComponent(testChildren);

    expect(wrapper.find(`#${testChildrenId}`).length).toBe(1);
  });

  it('should not render children if there are errors', () => {
    const wrapper = renderComponent(testChildren);

    wrapper.setState({ hasError: true });
    wrapper.update();

    expect(wrapper.find(`#${testChildrenId}`).length).toBe(0);
  });

  it('should reload the page after closing the modal', () => {
    const wrapper = renderComponent(testChildren);

    wrapper.setState({ hasError: true });
    wrapper.update();

    const spy = ((wrapper.instance() as ErrorBoundary).reload = jest.fn());

    wrapper.find(ModalAlert).props().onClose();
    wrapper.update();

    expect(spy).toBeCalledTimes(1);
  });
});
