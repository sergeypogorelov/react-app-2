import { DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { SearchMoviePageState } from '../../redux/interfaces/search-movie-page-state/search-movie-page-state.interface';

interface MatchParams {
  search?: string;
}

export interface SearchMoviePageProps
  extends Partial<DispatchProp>,
    Partial<RouteComponentProps<MatchParams>>,
    SearchMoviePageState {}
