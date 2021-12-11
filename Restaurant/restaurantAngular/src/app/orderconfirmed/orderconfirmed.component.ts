import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderconfirmed',
  templateUrl: './orderconfirmed.component.html',
  styleUrls: ['./orderconfirmed.component.scss']
})
export class OrderconfirmedComponent implements OnInit {
  public order: any;

  constructor() { }

  ngOnInit(): void {
    this.order=history.state;
    console.log(this.order)
  }

}
