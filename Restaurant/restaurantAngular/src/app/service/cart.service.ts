import { Injectable } from '@angular/core';
import {Cart} from "../model/Cart";
import {MenuItem} from "../model/MenuItem";
import {CartItem} from "../model/CartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  constructor() { }

  addToCart(food:MenuItem):void {
    let cartItem = this.cart.items.find(item => {
      return item.menuItem.id === food.id;
    });
    console.log(cartItem)
    if (cartItem) {

      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:Number): void{
    this.cart.items =
      this.cart.items.filter(item => {
       return  item.menuItem.id != foodId
      });
  }

  changeQuantity(foodId:Number, quantity:number){
    let cartItem = this.cart.items.find(item => {
       return item.menuItem.id === foodId
    });
    if(!cartItem) {
      return
    }
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
