import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {MakeReservationComponent} from "./make-reservation/make-reservation.component";
import {ReviewComponent} from "./review/review.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {OrderconfirmedComponent} from "./orderconfirmed/orderconfirmed.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'cart', component: CartComponent},
  {path: 'reservation', component: MakeReservationComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'orderconfirmed', component: OrderconfirmedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
