import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { loginFailureAction, loginSuccessAction, loginAction } from '../actions/login.action';
import { AuthService } from '../../services/auth.service';
import { LocalStorageInfoService } from '../../../shared/services/local-storage-info.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private localService: LocalStorageInfoService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      exhaustMap(({ request }) =>
        this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.localService.accessToken = currentUser.token;
            return loginSuccessAction({ currentUser });
          }),
          catchError((erResponse: HttpErrorResponse) => of(loginFailureAction({ errors: erResponse.error.errors }))),
        ),
      ),
    ),
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/').then();
        }),
      ),
    { dispatch: false },
  );
}
