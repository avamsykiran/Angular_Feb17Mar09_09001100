import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.userApiUrl = environment.usersApiUrl;
  }

  login(user: User): Observable<boolean> {
    return (
      this.httpClient.get<User[]>(`${this.userApiUrl}?userName=${user.userName}`)
        .pipe(
          map(data => {
            if (data == null || data == undefined || data.length == 0) {
              throw 'Invalid User Name';
            } else {
              let userFromServer = data[0];
              if (user.password == userFromServer.password) {
                sessionStorage.setItem("user", JSON.stringify(userFromServer));
                return true;
              } else {                
                throw 'Invalid Credits';
                return false;
              }
            }
          }),
          catchError(err => {
            console.log(err);
            throw err.message ? err.message : err;
          })
        )
    );
  }

  getCurrentUser(): User {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() != null && this.getCurrentUser() != undefined;
  }

  logOut() {
    sessionStorage.removeItem("user");
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userApiUrl, user)
      .pipe(
        catchError(err => {
          console.log(err);
          throw err.message ? err.message : err;
        })
      );
  }

  getNextUserId():Observable<number>{
    return (
      this.httpClient.get<User[]>(this.userApiUrl)
      .pipe(        
        map(users => users.length==0?1:(users[users.length-1].userId+1))
      )
    );
  }
}
