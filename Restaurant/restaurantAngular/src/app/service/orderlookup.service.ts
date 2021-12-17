import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MenuItem} from "../model/MenuItem";
import {Order} from "../model/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderlookupService {
  constructor(private http: HttpClient) {
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Array<Order>>("http://localhost:8080/api/order/get");
  }
}
