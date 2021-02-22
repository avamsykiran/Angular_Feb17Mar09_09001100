import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { VerbalPipe } from './verbal.pipe';
import { StucDirectiveDemoComponent } from './stuc-directive-demo/stuc-directive-demo.component';

const routes :Routes = [
  {path:'',component:WelcomeComponent},
  {path:'empForm',component:StucDirectiveDemoComponent},
  {path:'pipeDemo',component:PipesDemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PipesDemoComponent,
    VerbalPipe,
    StucDirectiveDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
