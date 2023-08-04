import { RegisterRequestInterface } from '../../shared/types/registerRequest.interface';
import { AuthResponseInterface } from '../../shared/types/authResponse.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { environments } from '../../../environments/environments';
import { LoginRequest } from '../../shared/types/loginRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(res: AuthResponseInterface): CurrentUserInterface {
    return res.user;
  }

  register(newUser: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const apiUsers = `${environments.apiURL}/users`;
    return this.http.post<AuthResponseInterface>(apiUsers, newUser).pipe(map(this.getUser));
  }

  login(user: LoginRequest): Observable<CurrentUserInterface> {
    const apiUsers = `${environments.apiURL}/users/login`;
    return this.http.post<AuthResponseInterface>(apiUsers, user).pipe(map(this.getUser));
  }
}
