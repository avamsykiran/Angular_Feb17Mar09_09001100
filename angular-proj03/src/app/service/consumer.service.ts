import { Injectable } from '@angular/core';
import { Consumer } from '../model/consumer';
import { TariffPlanService } from './tariff-plan.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  consumers: Consumer[];

  constructor(private trfService: TariffPlanService) {
    this.consumers = [
      {
        consumerId: 1, fullName: 'Vamsy',
        location: 'Karnataka', userId: 'vamc',
        accounts: [{ mobileNumber: '9052224753', plan: trfService.getById(102) }]
      },
      {
        consumerId: 2, fullName: 'Sagar',
        location: 'Andhra', userId: 'sagar',
        accounts: [{ mobileNumber: '9948016004', plan: trfService.getById(101) }]
      }
    ];
  }


  getAll() {
    return this.consumers;
  }

  getById(id: number) {
    return this.consumers.find((c) => (c.consumerId === id));
  }

  add(c: Consumer) {
    this.consumers.push(c);
  }

  update(c: Consumer) {
    let index = this.consumers.findIndex((cs) => (cs.consumerId === c.consumerId));
    if (index > -1) {
      this.consumers[index] = c;
    } else {
      throw "No Such Element Found";
    }
  }
}
