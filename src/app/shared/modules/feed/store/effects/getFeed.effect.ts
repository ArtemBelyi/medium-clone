import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { FeedResponseInterface } from '../../../../types/feed-response.interface';
import { FeedService } from '../../services/feed.service';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction
} from '../actions/getFeed.action';

@Injectable()
export class GetFeedEffect {
  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      exhaustMap(({ url }) =>
        this.feedService.getFeed(url).pipe(
          map((feed: FeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => of(getFeedFailureAction())),
        ),
      ),
    ),
  );
}
