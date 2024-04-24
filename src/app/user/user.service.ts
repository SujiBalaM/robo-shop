import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserCredentials } from './user.model';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServer = "http://localhost:3000";
  private user: BehaviorSubject<IUser | null>;
  public userLoggedIn = new Subject();;
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }
  getUser(): Observable<IUser | null> {
    return this.user;
  }
  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http.post<IUser>(this.apiServer + '/auth/login', credentials)
      .pipe(map((user: IUser) => {
        this.user.next(user)
        return user;
      }
      ))
  }
  login():Observable<IUserCredentials>{
    return this.http.get<IUserCredentials>(this.apiServer + '/auth/login');
  }
  signOut() {
    this.user.next(null)
  }

}


