import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';

import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { HomeComponent } from './home/home.component';
import { TariffFormComponent } from './tariff-form/tariff-form.component';
import { TariffsComponent } from './tariffs/tariffs.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'tariffs',component:TariffsComponent},
  {path:'addTariff',component:TariffFormComponent},
  {path:'editTariff/:id',component:TariffFormComponent},
  {path:'consumers',component:ConsumersComponent},
  {path:'addConsumer',component:ConsumerFormComponent},
  {path:'editConsumer/:id',component:ConsumerFormComponent},
  {path:'viewAccounts/:id',component:AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
