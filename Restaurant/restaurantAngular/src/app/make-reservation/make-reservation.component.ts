import { Component, OnInit } from '@angular/core';
import { Location } from './Location';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {

  constructor() { }

  locations: Location[] = [];

  ngOnInit(): void {
    
  }

}
