import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedToggleModule } from '../shared/modules/feed-toggler/feed-toggle.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';



@NgModule({
  declarations: [
    YourFeedComponent
  ],
  imports: [
    CommonModule,
    PopularTagsModule,
    FeedToggleModule,
    FeedModule,
    BannerModule
  ]
})
export class YourFeedModule { }
