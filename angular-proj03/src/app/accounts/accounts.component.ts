import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../model/account';
import { Consumer } from '../model/consumer';
import { ConsumerService } from '../service/consumer.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  consumer:Consumer;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private consumerService:ConsumerService
    ) { 
    this.consumer=null;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        if(params.id){
          this.consumerService.getById(params.id).subscribe(
            (data) => { this.consumer=data;}
          );
        }
      }
    );
  }

  addAccount(account:Account){
    account.id=this.consumer.accounts[this.consumer.accounts.length-1].id+1;
    this.consumer.accounts.push(account);

    this.consumerService.update(this.consumer).subscribe(
      (data) => {}
    );
  }

}
