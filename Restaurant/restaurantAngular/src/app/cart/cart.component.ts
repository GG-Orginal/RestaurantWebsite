import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";
import {Cart} from "../model/Cart";
import {CartItem} from "../model/CartItem";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!:Cart

  constructor(private cartService: CartService, private router: Router) {
    this.setCart();
  }

  ngOnInit(): void {

  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.menuItem.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.menuItem.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }


  continueShopping() {
    this.router.navigateByUrl('/menu')
  }
}
