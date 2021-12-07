import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import {FormsModule} from "@angular/forms";
import { ReviewComponent } from './review/review.component';
import {HttpClientModule} from "@angular/common/http";
import {CartComponent} from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MakeReservationComponent,
    ReviewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
