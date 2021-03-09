import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumer } from '../model/consumer';
import { ConsumerService } from '../service/consumer.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  consumer:Consumer;
  constructor(
    private userService:UserService,
    private conService:ConsumerService,
    private router:Router
  ) { 
    this.consumer=new Consumer();
  }

  ngOnInit(): void {
    let uid = this.userService.getCurrentUser().userId;
    this.conService.getByUserId(uid).subscribe(
      con => this.consumer=con
    );
  }

  logout(){
    this.userService.logOut();
    this.router.navigateByUrl("/home");
  }
}
