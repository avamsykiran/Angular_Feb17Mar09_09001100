import { Component } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-stuc-directive-demo',
  templateUrl: './stuc-directive-demo.component.html',
  styleUrls: ['./stuc-directive-demo.component.css']
})
export class StucDirectiveDemoComponent {

  emp:Employee;
  desgs:string[][];
  
  constructor() { 
    this.emp={
      empId:0,
      fullName:"",
      designation:"",
      basic:1500.0,
      officeCommute:false,
      pickupLocation:"",
      joinDate:null
    };
    this.desgs=[
      ["MGR","Manager"],
      ["TL","Team Leader"],
      ["ASS","Associate"],
      ["TRN","Trainee"]
    ];
  }

}
