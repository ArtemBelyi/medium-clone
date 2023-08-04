import { createAction, props } from '@ngrx/store';
import { LoginRequest } from '../../../shared/types/loginRequest';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { BackendErrors } from '../../../shared/types/backend-errors';
import { ActionTypes } from '../actionTypes';

export const loginAction = createAction(ActionTypes.LOGIN, props<{ request: LoginRequest }>());

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
);

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{ errors: BackendErrors }>());
