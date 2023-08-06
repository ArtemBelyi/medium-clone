import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../../shared/types/authState.interface';

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState) => authState.isSubmitting);

export const validationErrorsSelector = createSelector(authFeatureSelector, (authState) => authState.validationErrors);

export const isLoggedInSelector = createSelector(authFeatureSelector, (authState) => authState.isLoggedIn);

export const isAnonymousSelector = createSelector(authFeatureSelector, (authState) => authState.isLoggedIn === false);

export const currentUserSelector = createSelector(authFeatureSelector, (authState) => authState.currentUser);
