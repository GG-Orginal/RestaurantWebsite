import { Component, OnInit } from '@angular/core';
import { LocationItem } from '../model/LocationItem';
import {ReservationService} from "../service/reservation.service";
import {Reservation} from "../model/Reservation";
import {Router} from "@angular/router";

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {

  constructor(public reservationService:ReservationService,private router:Router) { }

  //locations: LocationItem[] = [{address:"133 Some Street", city:"Chicago, IL"},{address:"133 Short Street", city:"Naperville, IL"}];

  locations: string[] = ["133 Some St. Chicago, IL", "123 Short Street, Naperville, IL"]

  location: string = "133 Some St. Chicago, IL";
  name: string | undefined;
  howMany: number = 1;
  datetime: string | undefined;
  confirmationNumber: string | undefined;
  modalText: string = "";
  modalDisplay: string = "block";

  ngOnInit(): void {

    this.location = this.locations[0];
    this.name = "";
    this.howMany = 1;
    this.datetime = undefined;
    this.confirmationNumber = "";
  }

  onSubmit(){
    // generate confirmation number and create reservation object

    var confNum = Math.round(Math.random() * 10000 + 1000) + "";

    var reservation: Reservation = {id: -1, name: this.name, location: this.location, howMany: this.howMany, datetime: this.datetime,confirmationNumber: confNum}

    // send to backend to create reservation

    this.reservationService.makeReservation(reservation).subscribe(resp => {
      console.log(resp);

      // Display Reservation Details
      this.modalText = "Name: " + resp.name +
        '\n' + "Address: " + resp.location +
        '\n' + "Date/Time: " + resp.datetime +
      '\n' + "How Many: " + resp.howMany +
      '\n' + "CONFIRMATION NUMBER: " + resp.confirmationNumber

      alert(this.modalText);
    });

  }

  // openModal(){
  //   this.modalDisplay = "block";
  //   angular.element('#element').css('height', '100px');
  // }
  //
  // closeModal(){
  //   this.modalDisplay = "none";
  // }

}
