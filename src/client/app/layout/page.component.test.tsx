import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Page } from './page.component';
import { Footer } from './footer/footer.component';

const renderComponent = (children?: any): ShallowWrapper => {
  if (children) {
    return shallow(<Page>{children}</Page>);
  }

  return shallow(<Page />);
};

describe('Page component', () => {
  it('should not render children', () => {
    const wrapper = renderComponent();

    expect(wrapper.children().length).toBe(1);
  });

  it('should render children', () => {
    const child = <div id="test">test</div>;
    const wrapper = renderComponent(child);

    expect(wrapper.find('#test').length).toBe(1);
  });

  it('should render footer component', () => {
    const wrapper = renderComponent();

    expect(wrapper.find(Footer).length).toBe(1);
  });
});
