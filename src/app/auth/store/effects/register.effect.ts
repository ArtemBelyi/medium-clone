import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => registerSuccessAction({ currentUser })),
          catchError((erResponse: HttpErrorResponse) => of(registerFailureAction({ errors: erResponse.error.errors }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
