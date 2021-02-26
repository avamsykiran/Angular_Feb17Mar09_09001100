import { Component, OnInit } from '@angular/core';
import { TariffPlan } from '../model/tariff-plan';
import { TariffPlanService } from '../service/tariff-plan.service';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.css']
})
export class TariffsComponent implements OnInit {

  tariffs:TariffPlan[];
  err:string;

  constructor(private tariffService:TariffPlanService) {
    this.tariffs=[];
  }

  ngOnInit(): void {
    this.tariffService.getAll().subscribe(
      data => this.tariffs=data,
      err =>  {console.log(err); this.err="Sorry! Data could not be loaded,Retry later";}
    );
  }

}
