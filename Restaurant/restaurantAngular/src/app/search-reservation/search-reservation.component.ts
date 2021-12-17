import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../service/reservation.service";
import {Router} from "@angular/router";
import {Reservation} from "../model/Reservation";

@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.scss']
})
export class SearchReservationComponent implements OnInit {

  constructor(public reservationService:ReservationService,private router:Router) { }

  searchtitle: string = "By Phone";
  placeholdertext: string = "Phone Number";
  input: string = "";
  reservations: Reservation[] = [];
  noresults: string = "";

  ngOnInit(): void {

  }

  searchPhone(){
    this.searchtitle = "By Phone";
    this.placeholdertext = "Phone Number";
  }

  searchConfNo(){
    this.searchtitle = "By Confirmation Number";
    this.placeholdertext = "Confirmation Number";
  }

  search(){

    var searchno = "";

    if (this.searchtitle == "By Phone") {
      searchno = 'p' + this.input;
    }
    if (this.searchtitle == "By Confirmation Number"){
      searchno = 'c' + this.input;
    }

    this.reservationService.searchReservation(searchno).subscribe(resp => {

      this.reservations = [];

      if (resp.length == 0){
        this.noresults = "No Results :(";
        return;
      }

      this.noresults = "";

      for(let i = 0; i < resp.length; i++){
        let resv = new Reservation();

        resv.name = resp[i].name;
        resv.phoneNumber = resp[i].phoneNumber;
        resv.location = resp[i].location;
        resv.datetime = resp[i].datetime;
        resv.howMany = resp[i].howMany;
        resv.confirmationNumber = resp[i].confirmationNumber;

        this.reservations.push(resv);
      }

    });

  }
}
