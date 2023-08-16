import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { isLoadingSelector, dataFeedSelector, errorSelector } from '../../store/selectors';
import { environments } from '../../../../../../environments/environments';
import { FeedResponseInterface } from '../../../../types/feed-response.interface';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { Router, UrlTree } from '@angular/router';

const limitCount = environments.limit

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})

export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string;

  isLoading!: boolean;
  baseUrl!: string;
  error!: string | null;
  feed: FeedResponseInterface | null;
  limit = limitCount
  urlTree: UrlTree
  destroyed = new Subject()

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
    //console.log(this.router.parseUrl(this.router.url));
  }

  ngOnDestroy(): void {
    this.destroyed.next(this);
    this.destroyed.complete();
  }

  private initializeValues(): void {
    this.baseUrl = this.router.url.split('?')[0]
    this.urlTree = this.router.parseUrl(this.router.url)

    combineLatest([
      this.store.pipe(select(isLoadingSelector)),
      this.store.pipe(select(errorSelector)),
      this.store.pipe(select(dataFeedSelector)),
    ]).pipe(takeUntil(this.destroyed))
      .subscribe(([isLoading, error, feed]) => {
      this.isLoading = isLoading;
      this.error = error;
      this.feed = feed;
    });
  }

  private fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
