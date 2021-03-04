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

  consumer: Consumer;

  isDeletable: boolean;

  isEditing: boolean[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private consumerService: ConsumerService
  ) {
    this.consumer = null;
    this.isEditing = null;
    this.isDeletable = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        if (params.id) {
          this.consumerService.getById(params.id).subscribe(
            (data) => {
              this.consumer = data;
              this.isEditing = [];
              this.isDeletable = data.accounts.length > 1;
              for (let i = 0; i < data.accounts.length; i++) {
                this.isEditing[i] = false;
              }
            }
          );
        }
      }
    );
  }

  addAccount(account: Account) {
    account.id = this.consumer.accounts[this.consumer.accounts.length - 1].id + 1;
    this.consumer.accounts.push(account);

    this.consumerService.update(this.consumer).subscribe(
      (data) => {
        this.isDeletable = data.accounts.length > 1;
        this.isEditing.push(false);
      }
    );
  }

  deleteAccount(id: number) {
    if (confirm("Are you sure of deleting account#" + id + "?")) {
      let index = this.consumer.accounts.findIndex(a => a.id == id);
      if (index > -1) {
        this.consumer.accounts.splice(index, 1);

        this.consumerService.update(this.consumer).subscribe(
          (data) => {
            this.isDeletable = data.accounts.length > 1;
            this.isEditing.splice(index, 1);
          }
        );
      }
    }
  }

  editAccount(id:number){
    let index = this.consumer.accounts.findIndex(a => a.id == id);
    if (index > -1) {
      this.isEditing[index]=true;
    }
  }

  cancelEdit(id:number){
    let index = this.consumer.accounts.findIndex(a => a.id == id);
    if (index > -1) {
      this.isEditing[index]=false;
    }
  }

  updateAccount(account:Account){
    let index = this.consumer.accounts.findIndex(a => a.id == account.id);
    if (index > -1) {
      this.consumer.accounts[index]=account;

      this.consumerService.update(this.consumer).subscribe(
        (data) => {          
          this.isEditing[index]=false;
        }
      );
    }
  }
}
