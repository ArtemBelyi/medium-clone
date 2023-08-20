import { FeedStateInterface } from '../../../../types/feedState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from '../actions/getFeed.action';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),

  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      data: action.feed,
      isLoading: false,
    }),
  ),

  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    routerNavigatedAction,
    (): FeedStateInterface => ({
      isLoading: true,
      error: null,
      data: null,
    }),
  ),
);

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
