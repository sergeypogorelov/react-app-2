import {
  SEARCH_MOVIES_FULFILLED,
  CHANGE_SEARCH,
  CHANGE_SEARCH_BY,
  CHANGE_SORT_BY,
} from '../../actions/action-types';

import { SearchBy } from '../../../core/enums/search-by.enum';
import { SortBy } from '../../../core/enums/sort-by.enum';

import { SearchMoviePageState } from '../../interfaces/search-movie-page-state/search-movie-page-state.interface';
import {
  SearchMoviesFulfilledAction,
  ChangeSearchAction,
  ChangeSearchByAction,
  ChangeSortByAction,
} from '../../actions/search-movie-page/search-movie-page';

import { Utils } from '../../../core/helpers/utils/utils.class';

import {
  searchMoviePageState,
  searchMoviePageReducer,
} from './search-movie-page-reducer';

describe('search movie page reducer', () => {
  let state: SearchMoviePageState;

  beforeEach(() => {
    state = Utils.deepCopy(searchMoviePageState);
  });

  it('should handle correctly action SEARCH_MOVIES_FULFILLED', () => {
    const action: SearchMoviesFulfilledAction = {
      type: SEARCH_MOVIES_FULFILLED,
      payload: {
        data: [],
        total: 0,
        offset: 0,
        limit: 0,
      },
    };

    const newState = searchMoviePageReducer(state, action);

    expect(newState.movies).toEqual(action.payload.data);
    expect(newState.totalMovies).toBe(action.payload.total);
  });

  it('should handle correctly action CHANGE_SEARCH', () => {
    const search = 'search';
    const action: ChangeSearchAction = {
      type: CHANGE_SEARCH,
      payload: search,
    };

    const newState = searchMoviePageReducer(state, action);

    expect(newState.search).toBe(search);
  });

  it('should handle correctly action CHANGE_SEARCH_BY', () => {
    const searchBy = SearchBy.Title;
    const action: ChangeSearchByAction = {
      type: CHANGE_SEARCH_BY,
      payload: searchBy,
    };

    const newState = searchMoviePageReducer(state, action);

    expect(newState.searchBy).toBe(searchBy);
  });

  it('should handle correctly action CHANGE_SORT_BY', () => {
    const sortBy = SortBy.Rating;
    const action: ChangeSortByAction = {
      type: CHANGE_SORT_BY,
      payload: sortBy,
    };

    const newState = searchMoviePageReducer(state, action);

    expect(newState.sortBy).toBe(sortBy);
  });
});
