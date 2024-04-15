import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserCredentials } from './user.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServer = "http://localhost:8000";
  private user: BehaviorSubject<IUser | null>;
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }
  getUser(): Observable<IUser | null> {
    return this.user;
  }
  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http.post<IUser>(this.apiServer + '/sign-in', credentials)
      .pipe(map((user: IUser) => {
        this.user.next(user)
        return user;
      }
      ))
  }
  signOut() {
    this.user.next(null)
  }

}


