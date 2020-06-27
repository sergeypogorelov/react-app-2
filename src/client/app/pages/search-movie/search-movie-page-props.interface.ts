import { CommonProps } from '../../core/interfaces/common/common-props.interface';
import { SearchMoviePageState } from '../../redux/interfaces/search-movie-page-state/search-movie-page-state.interface';

interface MatchParams {
  search?: string;
}

export interface SearchMoviePageProps
  extends CommonProps<MatchParams>,
    SearchMoviePageState {}
