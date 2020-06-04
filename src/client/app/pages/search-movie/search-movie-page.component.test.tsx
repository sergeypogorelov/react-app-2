import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Header } from '../../shared/header/header.component';
import { HeaderTitle } from '../../shared/header/header-title/header-title.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { SwitchContainer } from '../../shared/switch-container/switch-container.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';
import { MovieSearch } from './movie-search/movie-search.component';
import { MovieSearchSwitch } from './movie-search-switch/movie-search-switch.component';

import { SearchMoviePage } from './search-movie-page.component';

const renderComponent = (): ShallowWrapper => {
  return shallow(<SearchMoviePage />);
};

describe('Search movie page component', () => {
  it('should render header component and its children', () => {
    const wrapper = renderComponent();
    const headerWrapper = wrapper.find(Header);

    expect(headerWrapper.length).toBe(1);
    expect(headerWrapper.find(HeaderTitle).length).toBe(1);
    expect(headerWrapper.find(MovieSearch).length).toBe(1);
    expect(headerWrapper.find(MovieSearchSwitch).length).toBe(1);
  });

  it('should render info container component and its children', () => {
    const wrapper = renderComponent();
    const infoContainerWrapper = wrapper.find(InfoContainer);

    expect(infoContainerWrapper.length).toBe(1);
    expect(infoContainerWrapper.find(InfoText).length).toBe(1);
    expect(infoContainerWrapper.find(SwitchContainer).length).toBe(1);
  });

  it('should render movies list component', () => {
    const wrapper = renderComponent();

    expect(wrapper.find(MoviesList).length).toBe(1);
  });

  it('should pass header title id to header title and movie search components', () => {
    const wrapper = renderComponent();
    const headerTitle = wrapper.find(HeaderTitle);
    const movieSearch = wrapper.find(MovieSearch);

    const controlLabeledBy = movieSearch.props().controlLabeledBy;
    expect(controlLabeledBy).toContain(headerTitle.props().id);
  });
});
