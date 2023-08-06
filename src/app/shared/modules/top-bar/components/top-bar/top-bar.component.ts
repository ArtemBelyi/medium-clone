import { Component, OnInit } from '@angular/core';
import {
  isLoggedInSelector,
  isAnonymousSelector,
  currentUserSelector
} from '../../../../../auth/store/selectors';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CurrentUserInterface } from '../../../../types/currentUser.interface';

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{
  isLoggedIn$!: Observable<boolean | null>
  isAnonymous$!: Observable<boolean>
  currentUser$!: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }

}
