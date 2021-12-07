import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {ReviewComponent} from "./review/review.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
