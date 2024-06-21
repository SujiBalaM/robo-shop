import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ILoginResponse,
  IUser,
  IUserCredentials,
  IUserResponse,
} from './user.model';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiServer = 'http://localhost:3000';
  private user: BehaviorSubject<ILoginResponse | null>;
  public userLoggedIn = new Subject();
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<ILoginResponse | null>(null);
  }
  getUser(): Observable<ILoginResponse | null> {
    return this.user;
  }
  signIn(credentials: IUserCredentials): Observable<ILoginResponse> {
    return this.http
      .put<ILoginResponse>(this.apiServer + '/auth/login', credentials)
      .pipe(
        map((user: ILoginResponse) => {
          this.user.next(user);
          window.localStorage.setItem('token', user.accessToken);
          return user;
        })
      );
  }
  login(): Observable<IUserCredentials> {
    return this.http.get<IUserCredentials>(this.apiServer + '/auth/login');
  }
  signOut() {
    this.user.next(null);
  }
}
