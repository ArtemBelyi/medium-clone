import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageInfoService {
  constructor() {}

  public get accessToken(): string {
    return JSON.parse(localStorage.getItem('accessToken') || '');
  }

  public set accessToken(token: string) {
    localStorage.setItem('accessToken', JSON.stringify(token));
  }
}
