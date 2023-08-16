import { Component } from '@angular/core';

@Component({
  selector: 'mc-global-feeds',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
