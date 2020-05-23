import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Page } from './layout/page.component';
import { App } from './app.component';

describe('AppComponent', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render PageComponent', () => {
    expect(wrapper.find(Page).length).toBe(1);
  });
});
