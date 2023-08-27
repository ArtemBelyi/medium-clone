import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopularTagsStateInterface } from '../../../types/popularTagsState.interface';

export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('tags');

export const popularTagsSelector = createSelector(popularTagsFeatureSelector, (state) => state.data)
export const isLoadingTagsSelector = createSelector(popularTagsFeatureSelector, (state) => state.isLoading)
export const errorTagsSelector = createSelector(popularTagsFeatureSelector, (state) => state.error)
