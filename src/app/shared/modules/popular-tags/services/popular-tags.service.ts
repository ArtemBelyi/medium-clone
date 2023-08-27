import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { PopularTagsResponseInterface } from '../../../types/popularTagsResponse.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<Array<string>> {
    const urlTags = `${environments.apiURL}/tags`

    return this.http.get<PopularTagsResponseInterface>(urlTags).pipe(map((res: PopularTagsResponseInterface) => res.tags));
  };
}
