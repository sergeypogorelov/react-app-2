import * as types from '../../actions/action-types';
import { initialState } from '../initial-state';

export const moviesReducer = (
  state = initialState.moviesPage,
  action: { type: string; payload?: any }
): typeof initialState.moviesPage => {
  switch (action.type) {
    case types.SEARCH_MOVIES_FULFILLED:
      return {
        ...state,
        movies: action.payload.data,
        totalMovies: action.payload.total,
      };
    default:
      return state;
  }
};
