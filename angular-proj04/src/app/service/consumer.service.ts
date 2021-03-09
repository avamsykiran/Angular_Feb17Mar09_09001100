import { Injectable } from '@angular/core';
import { Consumer } from '../model/consumer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError,map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  consumerApi: string;

  constructor(private httpclient: HttpClient) {
    this.consumerApi = environment.consumersApiUrl;
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

  getByUserId(uid: number): Observable<Consumer> {
    return this.httpclient
    .get<Consumer[]>(`${this.consumerApi}?userId=${uid}`)
    .pipe(
      map(consumers => consumers.length==0?null:consumers[0]),
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
    .put<Consumer>(`${this.consumerApi}/${c.consumerId}`, c)
    .pipe(
      catchError((err) => {
          console.log(err);
          throw "Unable to save data, please retry later!";
      })
    );
  }

  getNextConsumerId():Observable<number>{
    return (
      this.getAll()
      .pipe(        
        map(consumers => consumers.length==0?1:(consumers[consumers.length-1].consumerId+1))
      )
    );
  }
}
