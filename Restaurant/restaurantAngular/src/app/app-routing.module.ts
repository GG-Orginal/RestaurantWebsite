import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {MakeReservationComponent} from "./make-reservation/make-reservation.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'makereservation', component: MakeReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
