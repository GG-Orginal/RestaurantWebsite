import {Injectable} from '@angular/core';
import {Cart} from "../model/Cart";
import {MenuItem} from "../model/MenuItem";
import {CartItem} from "../model/CartItem";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

export interface Order {
  id: Number;
  firstName: String,
  lastName: String,
  phoneNumber: String,
  address: String,
  delivery: false,
  orderItems: MenuItem[],
  total: Number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor(private http: HttpClient) {
  }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    delivery: new FormControl(false, Validators.required),
    orderItems: new FormControl([]),
    total: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      delivery: false,
      orderItems: [],
      total: ''
    });
  }

  addToCart(food: MenuItem): void {
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

  removeFromCart(foodId: Number): void {
    this.cart.items =
      this.cart.items.filter(item => {
        return item.menuItem.id != foodId
      });
  }

  changeQuantity(foodId: Number, quantity: number) {
    let cartItem = this.cart.items.find(item => {
      return item.menuItem.id === foodId
    });
    if (!cartItem) {
      return
    }
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }

  populateForm(todoItem: any) {
    this.form.setValue(todoItem);
  }

  newOrder(order: Order) {
    this.cart.items.forEach(item => {
      if (item.quantity > 1) {
        for (let i = 0; i <= item.quantity; i++) {
          order.orderItems.push(item.menuItem)
        }
      } else {
        order.orderItems.push(item.menuItem)
      }
    });
    console.log(order)
    return this.http.post('http://localhost:8080/api/order', order);
  }
}
