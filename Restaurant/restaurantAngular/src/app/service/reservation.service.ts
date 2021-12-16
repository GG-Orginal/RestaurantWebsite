import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Reservation} from "../model/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  public makeReservation = (data:any): Observable<Reservation> => {
    return this.http.post<Reservation>(`api/reservation/makeReservation`,data);
  }



}
