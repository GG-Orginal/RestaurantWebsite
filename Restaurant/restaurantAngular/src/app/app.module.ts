import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { ReviewComponent } from './review/review.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CartService} from "./service/cart.service";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import { OrderconfirmedComponent } from './orderconfirmed/orderconfirmed.component';
import { OrderReadyTimePipe } from './pipes/order-ready-time.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { SearchReservationComponent } from './search-reservation/search-reservation.component';
import { OrderlookupComponent } from './orderlookup/orderlookup.component';
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MakeReservationComponent,
    ReviewComponent,
    CartComponent,
    CheckoutComponent,
    OrderconfirmedComponent,
    OrderReadyTimePipe,
    HomepageComponent,
    NavbarComponent,
    SearchReservationComponent,
    OrderlookupComponent,
    YesNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
  ],
  providers: [CartService,
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
