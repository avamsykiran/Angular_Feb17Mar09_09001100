import { Component  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  links:Link[];

  constructor() { 
    this.links = [
      {link:"/",label:"Home"},
      {link:"/tariffs",label:"Tariff Plans"},
      {link:"/addTariff",label:"New Tariff Plan"}
    ];
  }

}

class Link{
  link:string;
  label:string;
}