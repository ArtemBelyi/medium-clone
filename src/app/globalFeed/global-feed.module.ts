import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feets/global-feed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    FeedModule
  ],
})
export class GlobalFeedModule {}
