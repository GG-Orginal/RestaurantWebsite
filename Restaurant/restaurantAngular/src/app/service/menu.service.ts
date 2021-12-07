import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MenuItem} from "../model/MenuItem";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {
  }

  getAllMenuItems(): Observable<MenuItem[]> {
    return this.http.get<Array<MenuItem>>("http://localhost:8080/api/menu/get");
  }
}
