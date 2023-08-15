import { FeedStateInterface } from '../../../types/feedState.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const feedFeatureSelector = createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector(feedFeatureSelector, (feedState) => feedState.isLoading);

export const errorSelector = createSelector(feedFeatureSelector, (feedState) => feedState.error);

export const dataFeedSelector = createSelector(feedFeatureSelector, (feedState) => feedState.data);
