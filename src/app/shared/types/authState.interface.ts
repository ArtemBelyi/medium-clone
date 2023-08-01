import { CurrentUserInterface } from './currentUser.interface';
import { BackendErrors } from './backend-errors';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrors | null;
}
