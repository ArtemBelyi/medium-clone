import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../../shared/types/registerRequest.interface';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { BackendErrors } from '../../../shared/types/backend-errors';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: RegisterRequestInterface }>());

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE, props<{ errors: BackendErrors }>());
