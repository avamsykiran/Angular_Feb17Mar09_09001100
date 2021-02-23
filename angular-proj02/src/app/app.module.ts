import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { HomeComponent } from './home/home.component';
import { TariffFormComponent } from './tariff-form/tariff-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TariffsComponent,
    HomeComponent,
    TariffFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
