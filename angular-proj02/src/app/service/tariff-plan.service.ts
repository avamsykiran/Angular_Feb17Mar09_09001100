import { Injectable } from '@angular/core';
import { TariffPlan } from '../model/tariff-plan';

@Injectable({
  providedIn: 'root'
})
export class TariffPlanService {

  tariffs:TariffPlan[];

  constructor() {
    this.tariffs=[
      {planId:101,title:'30 Day topup',cost:345,validity:30},
      {planId:102,title:'60 Day full-talk',cost:888,validity:60},
      {planId:103,title:'30 Day full-talk',cost:444,validity:30},
      {planId:104,title:'60 Day topup',cost:645,validity:60},
      {planId:105,title:'75 Day topup',cost:975,validity:75}
    ];
   }

   getAll(){
     return this.tariffs;
   }

   getById(id:number){
    return this.tariffs.find((t) => (t.planId===id));
   }

   add(tariff:TariffPlan){
     this.tariffs.push(tariff);
   }

   remove(id:number){
    let index = this.tariffs.findIndex((t) => (t.planId===id));
    if(index>-1){
      this.tariffs.splice(index,1);
    }else{
      throw "No Such Element Found";
    }
   }

   update(tariff:TariffPlan ){
    let index = this.tariffs.findIndex((t) => (t.planId===tariff.planId));
    if(index>-1){
      this.tariffs[index]=tariff;
    }else{
      throw "No Such Element Found";
    }
   }
}
