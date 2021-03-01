import { Injectable } from '@angular/core';
import { Consumer } from '../model/consumer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  consumerApi: string;

  constructor(private httpclient: HttpClient) {
    this.consumerApi = "http://localhost:5555/consumers";
  }

  getAll(): Observable<Consumer[]> {
    return this.httpclient
      .get<Consumer[]>(this.consumerApi)
      .pipe(
        catchError((err) => {
            console.log(err);
            throw "Unable to fetch data, please retry later!";
        })
      );
  }

  getById(id: number): Observable<Consumer> {
    return this.httpclient
    .get<Consumer>(`${this.consumerApi}/${id}`)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to fetch data, please retry later!";
      })
    );
  }

  add(c: Consumer): Observable<Consumer> {
    return this.httpclient
    .post<Consumer>(this.consumerApi, c)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to save data, please retry later!";
      })
    );
  }

  remove(id: number): Observable<void> {
    return this.httpclient
    .delete<void>(`${this.consumerApi}/${id}`)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to remove data, please retry later!";
      })
    );
  }

  update(c: Consumer): Observable<Consumer> {
    return this.httpclient
    .put<Consumer>(`${this.consumerApi}/${c.id}`, clientInformation)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to save data, please retry later!";
      })
    );
  }

}
