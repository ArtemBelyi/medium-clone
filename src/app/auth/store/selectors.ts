import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../../shared/types/authState.interface';

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState) => authState.isSubmitting);
