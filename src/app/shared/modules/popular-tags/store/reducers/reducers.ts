import { createReducer, on, Action } from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from '../actions/getPopularTags';
import { PopularTagsStateInterface } from '../../../../types/popularTagsState.interface';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const popularTagReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
      error: null
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: null
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagReducer(state, action)
}
