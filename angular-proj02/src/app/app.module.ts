import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { HomeComponent } from './home/home.component';
import { TariffFormComponent } from './tariff-form/tariff-form.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { SeriesComponent } from './series/series.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TariffsComponent,
    HomeComponent,
    TariffFormComponent,
    ConsumersComponent,
    ConsumerFormComponent,
    ObservableDemoComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
