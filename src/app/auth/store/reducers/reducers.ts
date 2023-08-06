import { AuthStateInterface } from '../../../shared/types/authState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { loginAction, loginSuccessAction, loginFailureAction } from '../actions/login.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }),
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
      currentUser: action.currentUser,
    }),
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    }),
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoggedIn: true,
      isSubmitting: false,
      validationErrors: null,
      currentUser: action.currentUser,
    }),
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }),
  ),
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
