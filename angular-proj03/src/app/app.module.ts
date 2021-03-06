import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { HomeComponent } from './home/home.component';
import { TariffFormComponent } from './tariff-form/tariff-form.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountFormComponent } from './account-form/account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TariffsComponent,
    HomeComponent,
    TariffFormComponent,
    ConsumersComponent,
    ConsumerFormComponent,
    AccountsComponent,
    AccountDetailsComponent,
    AccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
