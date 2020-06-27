import { CommonProps } from '../../core/interfaces/common/common-props.interface';
import { ViewMoviePageState } from '../../redux/interfaces/view-movie-page-state/view-movie-page-state.interface';

interface MatchParams {
  movieId: string;
}

export interface ViewMoviePageProps
  extends CommonProps<MatchParams>,
    ViewMoviePageState {
  lastSearch?: string;
}
