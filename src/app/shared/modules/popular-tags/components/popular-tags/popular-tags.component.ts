import { Component, OnInit } from '@angular/core';
import { getPopularTagsAction } from '../../store/actions/getPopularTags';
import {
  popularTagsSelector,
  isLoadingTagsSelector,
  errorTagsSelector
} from '../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  popularTags$: Observable<Array<string> | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store ) {
  }

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  private initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingTagsSelector));
    this.error$ = this.store.pipe(select(errorTagsSelector));
  }

  private fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }

}
