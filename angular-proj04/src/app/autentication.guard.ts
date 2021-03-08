import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouteReuseStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticationGuard implements CanActivate, CanActivateChild {


  constructor(private userService : UserService,private router:Router){

  }

  isAllowed(path:string):boolean{
    let allowed:boolean=true;

    if(this.userService.isLoggedIn()){
      if(path.indexOf("home")>-1){
        allowed=false;
      }else if(this.userService.getCurrentUser().role=="ADMIN" && path.indexOf("consumer")>-1){
        allowed=false;
      }else if(this.userService.getCurrentUser().role=="CONSUMER" && path.indexOf("admin")>-1){
        allowed=false;
      }
    }else{
      if(path.indexOf("admin")>-1 || path.indexOf("consumer")>-1){
        allowed=false;
      }
    }

    if(!allowed){
      if(!this.userService.isLoggedIn()){
        this.router.navigateByUrl("/home/login");
      }else if(this.userService.getCurrentUser().role=="ADMIN"){
        this.router.navigateByUrl("/admin");
      }else if(this.userService.getCurrentUser().role=="CONSUMER"){
        this.router.navigateByUrl("/consumer");
      }
    }

    return allowed;
  }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed(state.url);
  }
 
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed(state.url);
  }
  
}
