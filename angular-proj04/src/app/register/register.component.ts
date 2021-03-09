import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../model/account';
import { Consumer } from '../model/consumer';
import { TariffPlan } from '../model/tariff-plan';
import { User } from '../model/user';
import { AccountService } from '../service/account.service';
import { ConsumerService } from '../service/consumer.service';
import { TariffPlanService } from '../service/tariff-plan.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm : FormGroup;

  userName : FormControl;
  password : FormControl;
  fullName: FormControl;
  location: FormControl;
  mobileNumber : FormControl;
  planId:FormControl;

  plans:TariffPlan[];
  constructor(
    private userService:UserService,
    private conService:ConsumerService,
    private accountService:AccountService,
    private tariffService:TariffPlanService,
    private router:Router
  ) {

    this.userName=new FormControl('',[Validators.required]);
    this.password=new FormControl('',[Validators.required]);
    this.fullName=new FormControl('',[Validators.required]);
    this.location=new FormControl('',[Validators.required]);
    this.mobileNumber=new FormControl('',[Validators.required]);
    this.planId=new FormControl('',[Validators.required]);

    this.regForm = new FormGroup({
      userName:this.userName,
      password:this.password,
      fullName:this.fullName,
      location:this.location,
      mobileNumber:this.mobileNumber,
      planId:this.planId
    });
  }

  ngOnInit(): void {
    this.tariffService.getAll().subscribe(
      (data) => {this.plans=data;}
    );
  }

  formSubmited(){

    let user : User = new User();
    let consumer : Consumer = new Consumer();
    let account : Account = new Account();

    user.userName=this.regForm.value.userName;
    user.password=this.regForm.value.password;
    user.role="CONSUMER";

    consumer.fullName=this.regForm.value.fullName;
    consumer.location=this.regForm.value.location;
    
    account.mobileNumber=this.regForm.value.mobileNumber;
    account.planId=this.regForm.value.planId;

    this.userService.getNextUserId().subscribe(
      (uid) => {
        user.userId=uid;
        this.userService.register(user).subscribe(
          (u) => {
            consumer.userId=u.userId;
            this.conService.getNextConsumerId().subscribe(
              (cid) =>{
                consumer.consumerId=cid;
                this.conService.add(consumer).subscribe(
                  (con) => {
                    account.consumerId=con.consumerId;
                    this.accountService.getNextAccountId().subscribe(
                      (aid) => {
                        account.accountId=aid;
                        this.accountService.add(account).subscribe(
                          (a) =>{
                            this.router.navigateByUrl("/home/login");
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
}
