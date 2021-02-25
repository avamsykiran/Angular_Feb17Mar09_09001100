import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from '../service/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  lb:number;
  ub:number;

  results:number[];
  errMsg:string;

  isComplete:boolean;
  evens:boolean;
  sqrs:boolean;

  constructor(private seriesService:SeriesService) {
    this.lb=0;
    this.ub=0;
    this.results=null;
    this.errMsg=null;
    this.isComplete=true;
    this.evens=false;
    this.sqrs=false;
  }

  ngOnInit(): void {
  }

  startSeries(){
    this.results=[];
    this.errMsg=null;
    this.isComplete=false;
    
    let ob : Observable<number>=null;

    if(this.evens && this.sqrs){
      ob = this.seriesService.generateEvenSquaredSeries(this.lb,this.ub);
    }else if(this.evens){
      ob = this.seriesService.generateEvenSeries(this.lb,this.ub);
    }else if(this.sqrs){
      ob = this.seriesService.generateSquaredSeries(this.lb,this.ub);
    }else{
      ob = this.seriesService.generateSeries(this.lb,this.ub);
    }

    ob.subscribe(
      (value) => {this.results.push(value);},
      (err) => {this.errMsg=err; this.isComplete=true;},
      () => {this.isComplete=true;}
    );
  }
}
