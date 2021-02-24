import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consumer } from '../model/consumer';
import { TariffPlan } from '../model/tariff-plan';
import { ConsumerService } from '../service/consumer.service';
import { TariffPlanService } from '../service/tariff-plan.service';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent implements OnInit {

  conForm : FormGroup; //group of form controls

  consumerId:FormControl;
  userId:FormControl;
  fullName:FormControl;
  location:FormControl;
  mobileNumber:FormControl;
  planId:FormControl;

  plans:TariffPlan[];

  constructor(
    private trfService:TariffPlanService,
    private conService:ConsumerService,
    private router :Router
  ) { 

    this.consumerId=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.userId=new FormControl('',[Validators.required,Validators.minLength(3)]);
    this.fullName=new FormControl('',[Validators.required,Validators.minLength(3)]);
    this.location=new FormControl('',[Validators.required,Validators.minLength(3)]);
    this.mobileNumber=new FormControl('',[Validators.required,Validators.pattern(/[1-9][0-9]{9}/)]);
    this.planId=new FormControl('',[Validators.required]);

    this.conForm = new FormGroup({
      consumerId:this.consumerId,
      userId:this.userId,
      fullName:this.fullName,
      location:this.location,
      mobileNumber:this.mobileNumber,
      planId:this.planId
    });

    this.plans=[];
  }

  ngOnInit(): void {
    this.plans=this.trfService.getAll();
  }

  addConsumer(){

    let c : Consumer =  {
      consumerId: this.conForm.value.consumerId, 
      fullName: this.conForm.value.fullName,
      location: this.conForm.value.location, 
      userId: this.conForm.value.userId,
      accounts: [{ 
        mobileNumber: this.conForm.value.mobileNumber, 
        plan: this.trfService.getById(this.conForm.value.planId) }]
    };

    this.conService.add(c);
    this.router.navigateByUrl("/consumers");
  }
}
