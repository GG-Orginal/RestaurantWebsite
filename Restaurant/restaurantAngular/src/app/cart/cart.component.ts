import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {Cart} from "../model/Cart";
import {CartItem} from "../model/CartItem";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CheckoutComponent} from "../checkout/checkout.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart!: Cart

  constructor(private cartService: CartService, private router: Router, private dialog: MatDialog) {
    this.setCart();
  }

  ngOnInit(): void {
    console.log(this.cartService.getCart())
    console.log(this.cart)
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.menuItem.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.menuItem.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  continueShopping() {
    this.router.navigateByUrl('/menu')
  }

  onSubmit() {
    this.cartService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CheckoutComponent, dialogConfig);
  }
}
