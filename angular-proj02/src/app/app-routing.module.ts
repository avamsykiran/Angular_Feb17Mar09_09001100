import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { HomeComponent } from './home/home.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { TariffFormComponent } from './tariff-form/tariff-form.component';
import { TariffsComponent } from './tariffs/tariffs.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'tariffs',component:TariffsComponent},
  {path:'addTariff',component:TariffFormComponent},
  {path:'consumers',component:ConsumersComponent},
  {path:'addConsumer',component:ConsumerFormComponent},
  {path:'obdemo',component:ObservableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
