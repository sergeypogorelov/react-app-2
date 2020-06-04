import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { TitleMain } from '../../shared/title-main/title-main.component';
import { Footer } from './footer.component';

const renderComponent = (): ShallowWrapper => {
  return shallow(<Footer />);
};

describe('Footer component', () => {
  it('should render footer', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('footer').length).toBe(1);
  });

  it('should render main title in footer', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('footer').first().find(TitleMain).length).toBe(1);
  });
});
