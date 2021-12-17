export interface Order {
  id:Number;
  firstName:String;
  lastName:String;
  phoneNumber:String;
  address:String;
  delivery:Boolean;
  orderItems:Array<any>;
  total:Number;
  orderItemLists:Array<any>;
}
