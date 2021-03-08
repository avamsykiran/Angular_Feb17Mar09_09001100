import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticationGuard } from './autentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ],canActivate:[AutenticationGuard],canActivateChild:[AutenticationGuard]},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  ,canActivate:[AutenticationGuard],canActivateChild:[AutenticationGuard] },
  { path: 'consumer', loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule)
  ,canActivate:[AutenticationGuard],canActivateChild:[AutenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
