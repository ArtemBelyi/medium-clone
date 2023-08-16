import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
  ],
  exports: [FeedComponent],
})
export class FeedModule {}
