import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from '../../../../../auth/store/selectors';

@Component({
  selector: 'mc-feed-toggle',
  templateUrl: './feed-toggle.component.html',
  styleUrls: ['./feed-toggle.component.scss']
})
export class FeedToggleComponent implements OnInit{
  @Input("tagName") tagNameProps: string | null

  isLoggedIn$: Observable<boolean | null>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
