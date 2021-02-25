import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  generateSeries(lb: number, ub: number) : Observable<number> {

    const generateSeriesJob = (observer: Observer<number>) => {

      if(lb>ub){
        observer.error("Invalid limits, Series can not be generated!");
        return; //to stop the job
      }

      let n : number = lb;

      let handler = setInterval(()=>{
        observer.next(n); //emit n as result
        n++;
        if(n>ub){
          clearInterval(handler); //will stop the job
          observer.complete(); //signal completion
        }
      },1000);
    };

    let ob = new Observable(generateSeriesJob); //job executes when we subscribe.

    return ob;
  }

  generateEvenSeries(lb: number, ub: number) : Observable<number> {
    let olderOb = this.generateSeries(lb,ub);
    let newOb = olderOb.pipe(
      filter(n => n%2==0)
    );
    return newOb;
  }
  
  generateSquaredSeries(lb: number, ub: number) : Observable<number> {
    let olderOb = this.generateSeries(lb,ub);
    let newOb = olderOb.pipe(
      map(n => n*n)
    );
    return newOb;
  }

  generateEvenSquaredSeries(lb: number, ub: number) : Observable<number> {
    let olderOb = this.generateSeries(lb,ub);
    let newOb = olderOb.pipe(
      filter(n => n%2==0),
      map(n => n*n)
    );
    return newOb;
  }
}
