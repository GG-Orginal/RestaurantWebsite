import {Component, OnInit} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {OrderlookupService} from "../service/orderlookup.service";
import {Order} from "../model/Order";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-orderlookup',
  templateUrl: './orderlookup.component.html',
  styleUrls: ['./orderlookup.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderlookupComponent implements OnInit {
  orders: Array<Order> = [];
  isTableExpanded = false;

  dataOrdersList = new MatTableDataSource();
  displayedColumnsList: string[] = ['id', 'first name', 'last name', 'address', 'phone #', 'total', 'delivery', 'actions'];
  searchKey: any;

  constructor(private orderLookupService: OrderlookupService) {
  }

  ngOnInit(): void {
    this.getAllOrders()

  }

  getAllOrders(): void {
    this.orderLookupService.getAllOrders().subscribe(
      (response: Order[]) => {
        this.orders = response;
        this.dataOrdersList.data = this.orders;
        console.log(this.orders)
      }, (error: HttpResponse<any>) => {
        alert(error.body.message());
      });
  }

  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataOrdersList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

  search() {
    console.log(this.searchKey);
    this.dataOrdersList.filter = this.searchKey.trim().toLowerCase();
  }
}
