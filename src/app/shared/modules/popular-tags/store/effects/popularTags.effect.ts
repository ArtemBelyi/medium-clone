import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import {
  getPopularTagsFailureAction,
  getPopularTagsAction,
  getPopularTagsSuccessAction
} from '../actions/getPopularTags';
import { PopularTagsService } from '../../services/popular-tags.service';

@Injectable()
export class PopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}

  getPopularTags$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      exhaustMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: Array<string>) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),
          catchError(() => of(getPopularTagsFailureAction()))
        )
      })
    )
  });
}
