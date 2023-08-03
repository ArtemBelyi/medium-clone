import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { LocalStorageInfoService } from '../../../shared/services/local-storage-info.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private localService: LocalStorageInfoService,
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.localService.accessToken = currentUser.token;
            return registerSuccessAction({ currentUser });
          }),
          catchError((erResponse: HttpErrorResponse) => of(registerFailureAction({ errors: erResponse.error.errors }))),
        ),
      ),
    ),
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/').then();
        }),
      ),
    { dispatch: false },
  );
}
