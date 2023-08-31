import { Component, Input, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { isLoadingSelector, dataFeedSelector, errorSelector } from '../../store/selectors';
import { environments } from '../../../../../../environments/environments';
import { FeedResponseInterface } from '../../../../types/feed-response.interface';
import { combineLatest, Subject, Subscription, takeUntil } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import queryString, { ParsedUrl } from 'query-string';

const limitCount = environments.limit

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})

export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps!: string;

  isLoading!: boolean;
  baseUrl!: string;
  error!: string | null;
  feed: FeedResponseInterface | null;
  limit = limitCount
  currentPage: number
  destroyed = new Subject()
  queryParamsSubscription: Subscription

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges) {
    const urlProps = changes["apiUrlProps"];
    const isApiUrlChanged = !urlProps.firstChange && urlProps.currentValue !== urlProps.previousValue;

    isApiUrlChanged && this.fetchFeed();
  }

  ngOnDestroy(): void {
    this.destroyed.next(this);
    this.destroyed.complete();
    this.queryParamsSubscription.unsubscribe();
  }

  private initializeValues(): void {
    this.baseUrl = this.router.url.split('?')[0]

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

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams
      .subscribe((params: Params) => {
        this.currentPage = Number(params['page'])
        this.fetchFeed();
    })
  }

  private fetchFeed(): void {
    const parseObj: ParsedUrl = queryString.parseUrl(this.apiUrlProps)
    const offset = this.currentPage * this.limit - this.limit

    const stringParams = queryString.stringify({
      offset,
      limit: this.limit,
      ...parseObj.query
    })

    const apiUrlWithParams = `${parseObj.url}?${stringParams}`
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
}
