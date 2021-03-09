import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError,map } from 'rxjs/operators';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountApi: string;

  constructor(private httpclient: HttpClient) {
    this.accountApi = environment.accountsApiUrl;
  }

  getAll(): Observable<Account[]> {
    return this.httpclient
      .get<Account[]>(this.accountApi)
      .pipe(
        catchError((err) => {
            console.log(err);
            throw "Unable to fetch data, please retry later!";
        })
      );
  }

  getAllByConsumerId(cid:number): Observable<Account[]> {
    return this.httpclient
      .get<Account[]>(`${this.accountApi}?consumerId=${cid}`)
      .pipe(
        catchError((err) => {
            console.log(err);
            throw "Unable to fetch data, please retry later!";
        })
      );
  }

  getById(id: number): Observable<Account> {
    return this.httpclient
    .get<Account>(`${this.accountApi}/${id}`)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to fetch data, please retry later!";
      })
    );
  }

  add(a: Account): Observable<Account> {
    return this.httpclient
    .post<Account>(this.accountApi, a)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to save data, please retry later!";
      })
    );
  }

  remove(id: number): Observable<void> {
    return this.httpclient
    .delete<void>(`${this.accountApi}/${id}`)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to remove data, please retry later!";
      })
    );
  }

  update(a: Account): Observable<Account> {
    return this.httpclient
    .put<Account>(`${this.accountApi}/${a.accountId}`, a)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to save data, please retry later!";
      })
    );
  }

  getNextAccountId():Observable<number>{
    return (
      this.getAll()
      .pipe(        
        map(accounts => accounts.length==0?1:(accounts[accounts.length-1].accountId+1))
      )
    );
  }
}
