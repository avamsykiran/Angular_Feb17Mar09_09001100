import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../model/account';
import { TariffPlan } from '../model/tariff-plan';
import { TariffPlanService } from '../service/tariff-plan.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  @Input()
  account: Account;

  @Input()
  isEditing: boolean;

  plans: TariffPlan[];

  @Output()
  onAddAccount: EventEmitter<Account>;

  @Output()
  onUpdateAccount: EventEmitter<Account>;

  @Output()
  onCancelEdit: EventEmitter<number>;

  constructor(
    private planService: TariffPlanService
  ) {
    this.account = {
      id: 0,
      mobileNumber: '',
      planId: 0
    };

    this.isEditing = false;
    this.onAddAccount = new EventEmitter<Account>();
    this.onUpdateAccount = new EventEmitter<Account>();
    this.onCancelEdit = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.planService.getAll().subscribe(
      (data) => { this.plans = data; }
    );
  }

  formSubmited() {
    if (this.isEditing) {
      this.onUpdateAccount.emit(this.account);
    } else {
      this.onAddAccount.emit(this.account);
      this.account = {id: 0,mobileNumber: '', planId: 0 };
    }
  }

  cancelEdit() {
    this.onCancelEdit.emit(this.account.id);
  }
}
