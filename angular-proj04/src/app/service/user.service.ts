import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApiUrl:string;
  constructor(private httpClient:HttpClient) { 
    this.userApiUrl=environment.usersApiUrl;
  }

  login(user:User):Observable<boolean>{
    return 
    this.httpClient.get<User>(`${this.userApiUrl}/${user.userId}`)
    .pipe(
      map(data => {
        if(user.password==data.password){
          sessionStorage.setItem("user",JSON.stringify(data));
          return true;
        }else{
          throw "Invalid Credits!";
        }
      }),
      catchError(err => {
        console.log(err);
        throw err.message?err.message:err;
      })
    );
  }

  getCurrentUser():User{
    return JSON.parse(sessionStorage.getItem("user"));
  }

  isLoggedIn():boolean{
    return this.getCurrentUser()!=null && this.getCurrentUser()!=undefined;
  }

  logOut(){
    sessionStorage.removeItem("user");
  }

  register(user:User):Observable<User>{
    return this.httpClient.post<User>(this.userApiUrl,user)
    .pipe(
      catchError( err => {
        console.log(err);
        throw err.message? err.message : err;
      })
    );
  }
}
