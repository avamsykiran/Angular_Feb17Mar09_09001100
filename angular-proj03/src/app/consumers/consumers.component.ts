import { Component, OnInit } from '@angular/core';
import { Consumer } from '../model/consumer';
import { ConsumerService } from '../service/consumer.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  consumers:Consumer[];
  errMsg:string;
  constructor(private conSerivce:ConsumerService) {
    this.consumers=[];
  }

  ngOnInit(): void {
    this.conSerivce.getAll().subscribe(
      (data)=>{this.consumers=data;},
      (err)=>{ this.errMsg=err;}
    );
  }

}
