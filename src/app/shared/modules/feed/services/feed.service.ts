import { Injectable } from '@angular/core';
import { FeedResponseInterface } from '../../../types/feed-response.interface';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<FeedResponseInterface> {
    const fullUrl = `${environments.apiURL}${url}`;

    return this.http.get<FeedResponseInterface>(fullUrl);
  }
}
