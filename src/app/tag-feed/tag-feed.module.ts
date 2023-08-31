import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedToggleModule } from '../shared/modules/feed-toggler/feed-toggle.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';



@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
    FeedToggleModule,
    FeedModule,
    PopularTagsModule
  ]
})
export class TagFeedModule { }
