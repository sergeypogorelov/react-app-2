import { DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { ViewMoviePageState } from '../../redux/interfaces/view-movie-page-state/view-movie-page-state.interface';

interface MatchParams {
  movieId: string;
}

export interface ViewMoviePageProps
  extends Partial<DispatchProp>,
    Partial<RouteComponentProps<MatchParams>>,
    ViewMoviePageState {
  lastSearch?: string;
}
