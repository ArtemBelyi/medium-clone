import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';
import { AuthService } from '../../services/auth.service';
import { LocalStorageInfoService } from '../../../shared/services/local-storage-info.service';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { Router } from '@angular/router';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private localService: LocalStorageInfoService,
  ) {}

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      exhaustMap(() => {
        const token = this.localService.accessToken;
        if (token) {
          return this.authService.getCurrentUser().pipe(
            map((currentUser: CurrentUserInterface) => {
              return getCurrentUserSuccessAction({ currentUser });
            }),
            catchError(() => of(getCurrentUserFailureAction())),
          );
        } else {
          return of(getCurrentUserFailureAction());
        }
      }),
    ),
  );
}
