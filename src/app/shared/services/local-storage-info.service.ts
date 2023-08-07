import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageInfoService {
  constructor() {}

  public get accessToken(): string {
    const token = localStorage.getItem('accessToken');
    return token ? JSON.parse(token) : '';
  }

  public set accessToken(token: string) {
    localStorage.setItem('accessToken', JSON.stringify(token));
  }
}
