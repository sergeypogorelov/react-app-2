import React from 'react';
import renderer from 'react-test-renderer';

import { MovieDetails } from './movie-details.component';
import { Movie } from '../../../core/interfaces/movie/movie.interface';

test('MovieDetails component should render correctly', () => {
  const movie: Movie = {
    id: 1,
    title: 'title',
    tagline: 'tagline',
    vote_average: 10,
    vote_count: 100,
    release_date: '1993-12-03',
    poster_path: 'poster path',
    overview: 'overview',
    budget: 1000000,
    revenue: 1000,
    runtime: 150,
    genres: ['genre'],
  };
  const tree = renderer.create(<MovieDetails movie={movie} />).toJSON();
  expect(tree).toMatchSnapshot();
});
