import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TariffPlan } from '../model/tariff-plan';
import { TariffPlanService } from '../service/tariff-plan.service';

@Component({
  selector: 'app-tariff-form',
  templateUrl: './tariff-form.component.html',
  styleUrls: ['./tariff-form.component.css']
})
export class TariffFormComponent implements OnInit {

  tariff:TariffPlan;

  constructor(
    private tariffService:TariffPlanService,
    private router:Router
  ) { 
    this.tariff={};
  }

  ngOnInit(): void {
  }

  addTariff(){
    this.tariffService.add(this.tariff);
    this.router.navigateByUrl("/tariffs");
  }

  goBack(){
    this.router.navigateByUrl("/tariffs");
  }

}
