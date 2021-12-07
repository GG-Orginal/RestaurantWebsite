import { Component, OnInit } from '@angular/core';
import { LocationItem } from '../model/LocationItem';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {

  constructor() { }

  locations: LocationItem[] = [{address:"133 Some Street", city:"Chicago, IL"},{address:"133 Short Street", city:"Naperville, IL"}];
  chosenLocation: LocationItem = this.locations[0];

  ngOnInit(): void {

  }

}
