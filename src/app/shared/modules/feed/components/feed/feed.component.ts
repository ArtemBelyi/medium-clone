import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { isLoadingSelector, dataFeedSelector, errorSelector } from '../../store/selectors';
import { FeedResponseInterface } from '../../../../types/feed-response.interface';
import { combineLatest } from 'rxjs';
import { ArticleInterface } from '../../../../types/article.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  @Input('apiUrl') apiUrlProps!: string

  isLoading!: boolean
  error!: string | null
  feed: FeedResponseInterface | null

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.fetchData()
    this.initializeValues()
  }

  private initializeValues(): void {
    combineLatest([
      this.store.pipe(select(isLoadingSelector)),
      this.store.pipe(select(errorSelector)),
      this.store.pipe(select(dataFeedSelector))
    ]).subscribe(([isLoading, error, feed]) => {
      this.isLoading = isLoading;
      this.error = error;
      this.feed = feed;
    });
  }

  private fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
  }
}
