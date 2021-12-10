import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { OcComponent } from './oc/oc.component';
import { SanjoseComponent } from "./sanjose/sanjose.component";
import { SeattleComponent } from "./seattle/seattle.component";
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: "chicago", component: ChicagoComponent },
  { path: "dallas", component: DallasComponent },
  { path: "dc", component: DcComponent },
  { path: "losangeles", component: LosangelesComponent },
  { path: "oc", component: OcComponent },
  { path: "sanjose", component: SanjoseComponent },
  { path: "seattle", component: SeattleComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
