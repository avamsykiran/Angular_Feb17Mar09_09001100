import { Component  } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent  {

  str:string;
  num:number;
  today:Date;

  emp:Employee;

  constructor() {
    this.str="Hello everbody! I welcoem you all.";
    this.num=Math.PI;
    this.today=new Date();
    this.emp = {empId:101,name:"Vamsy",basic:890.0};
  }

}

class Employee{
  empId:number;
  name:string;
  basic:number;
}