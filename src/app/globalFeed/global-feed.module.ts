import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feets/global-feed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedToggleModule } from '../shared/modules/feed-toggler/feed-toggle.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, FeedModule, BannerModule, ErrorMessageModule, LoadingModule, PopularTagsModule, FeedToggleModule]
})
export class GlobalFeedModule {}
