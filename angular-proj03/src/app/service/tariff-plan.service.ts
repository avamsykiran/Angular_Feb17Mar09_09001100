import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { TariffPlan } from '../model/tariff-plan';

@Injectable({
  providedIn: 'root'
})
export class TariffPlanService {
  
  apiUrl:string;

  constructor(private httpclient : HttpClient) {
    this.apiUrl = "http://localhost:5555/tariffs";
   }

   getAll():Observable<TariffPlan[]>{
    return this.httpclient.get<TariffPlan[]>(this.apiUrl);
   }

   getById(id:number):Observable<TariffPlan>{    
    return this.httpclient.get<TariffPlan>(`${this.apiUrl}/${id}`);
   }

   add(tariff:TariffPlan):Observable<TariffPlan>{
    return this.httpclient.post<TariffPlan>(this.apiUrl,tariff);
   }

   remove(id:number):Observable<void>{
    return this.httpclient.delete<void>(`${this.apiUrl}/${id}`);
   }

   update(tariff:TariffPlan ):Observable<TariffPlan>{
    return this.httpclient.put<TariffPlan>(`${this.apiUrl}/${tariff.id}`,tariff);
   }
}
