import { Component} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  message:string;
  logo:string;
  logos:string[];
  imgWidth:number;

  isBordered:boolean;
  isCentered:boolean;
  isRoundCornered:boolean;

  constructor() { 
    this.message="This is my first component."
    this.logos = ["assets/img/n1.jpg","assets/img/n2.jpg"];
    this.logo=this.logos[0];
    this.imgWidth=150;

    this.isBordered=false;
    this.isRoundCornered=false;
    this.isCentered=false;
  }  

  onImageDoubleClick(){
    if(this.logo===this.logos[0]){
      this.logo=this.logos[1];
    }else{
      this.logo=this.logos[0];
    }
  }
}
