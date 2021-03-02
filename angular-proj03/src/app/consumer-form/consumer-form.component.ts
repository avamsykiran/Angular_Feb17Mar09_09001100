import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  isNew:boolean;

  constructor(
    private trfService:TariffPlanService,
    private conService:ConsumerService,
    private router :Router,
    private activatedRoute:ActivatedRoute
  ) { 

    this.isNew=true;

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
    this.trfService.getAll().subscribe(
      (data) => {this.plans=data;}
    );

    this.activatedRoute.params.subscribe(
      (params) => {
        if(params.id){
          this.isNew=false;
          this.conService.getById(params.id).subscribe(
            (c) => {
              this.conForm.setValue({
                consumerId:c.id,
                userId:c.userId,
                fullName:c.fullName,
                location:c.location,
                mobileNumber:c.accounts[0].mobileNumber,
                planId:c.accounts[0].planId
              });
            }
          );
        }
      }
    );
  }

  formSubmited(){
    this.isNew?this.addConsumer():this.updateConsumer();
  }

  addConsumer(){
    let c : Consumer =  {
      id: this.conForm.value.consumerId, 
      fullName: this.conForm.value.fullName,
      location: this.conForm.value.location, 
      userId: this.conForm.value.userId,
      accounts: [{ 
        id:1,
        mobileNumber: this.conForm.value.mobileNumber, 
        planId:this.conForm.value.planId       
      }]
    };

    this.conService.add(c).subscribe(
      (data) => {
        this.router.navigateByUrl("/consumers");
      }
    );
    
  }

  updateConsumer(){
    this.conService.getById(this.conForm.value.consumerId).subscribe(
      (c) => {
        
        c.userId=this.conForm.value.userId;
        c.fullName=this.conForm.value.fullName;
        c.location=this.conForm.value.location;

        this.conService.update(c).subscribe(
          (data) => {
             this.router.navigateByUrl("/consumers");
           }
        );
      }
    );
  }
}
