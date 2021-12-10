import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OcComponent } from './oc/oc.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OcComponent,
    SeattleComponent,
    SanjoseComponent,
    LosangelesComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
