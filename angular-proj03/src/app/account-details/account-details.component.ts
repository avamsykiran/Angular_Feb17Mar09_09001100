import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../model/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  @Input()
  account: Account;
  
  @Input()
  deletable:boolean;

  @Output()
  onDelete:EventEmitter<number>;
  
  @Output()
  onEdit:EventEmitter<number>;

  constructor() {
    this.account = null;
    this.deletable=false;
    this.onDelete = new EventEmitter<number>();
    this.onEdit = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  delete(){
    this.onDelete.emit(this.account.id);
  }

  edit(){
    this.onEdit.emit(this.account.id);
  }
}
