import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  errMsg:string;
  constructor(private userService:UserService,private router:Router) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.user).subscribe(
      (isloggedIn) => {
        if(isloggedIn){
          if(this.userService.getCurrentUser().role=="ADMIN"){
            this.router.navigateByUrl("/admin");
          }else{
            this.router.navigateByUrl("/consumer");
          }
        }
      },
      (err) =>{this.errMsg=err;}
    );

  }
}
