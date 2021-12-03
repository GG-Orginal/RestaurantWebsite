import {MenuItem} from "./MenuItem";

export class CartItem{
  menuItem:MenuItem;
  quantity:number = 1;

  constructor(item:MenuItem) {
    this.menuItem = item;
    this.getPrice();
  }

  getPrice():number {
    return this.menuItem.cost.valueOf() * this.quantity;
  }
}
