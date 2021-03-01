import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TariffPlan } from '../model/tariff-plan';
import { TariffPlanService } from '../service/tariff-plan.service';

@Component({
  selector: 'app-tariff-form',
  templateUrl: './tariff-form.component.html',
  styleUrls: ['./tariff-form.component.css']
})
export class TariffFormComponent implements OnInit {

  tariff:TariffPlan;
  errMsg:string;
  isNew:boolean;

  constructor(
    private tariffService:TariffPlanService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { 
    this.tariff={};
    this.isNew=true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        if(params.id){
          this.isNew=false;
          this.tariffService.getById(params.id).subscribe(
            (data) => {this.tariff=data;}
          );
        }
      }
    );
  }

  addTariff(){
    this.tariffService.add(this.tariff).subscribe(
      (data) => {
        this.router.navigateByUrl("/tariffs");
      },
      (err) => {
        console.log(err);
        this.errMsg="Unable to save the data! Retry later!";
      }
    );
  }

  modifyTariff(){
    this.tariffService.update(this.tariff).subscribe(
      (data) => {
        this.router.navigateByUrl("/tariffs");
      },
      (err) => {
        console.log(err);
        this.errMsg="Unable to save the data! Retry later!";
      }
    );
  }

  formSubmited(){
    this.isNew?this.addTariff():this.modifyTariff();
  }

  goBack(){
    this.router.navigateByUrl("/tariffs");
  }

}
