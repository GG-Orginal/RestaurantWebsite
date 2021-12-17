import {MenuItem} from "./MenuItem";

export interface Order {
  id: Number;
  menuItems:MenuItem;
  quantity:Number
}
