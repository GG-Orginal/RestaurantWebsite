import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {Review} from "../model/Review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {
  }

  public postReview = (data:any): Observable<{id:number, comment:String, time:String}> => {
    return this.http.post<{id:number, comment:String, time:String}>(`api/review/post`,data);
  }

  public getAllReviews = (): Observable<{id:number, comment:String, time:String}[]> => {
    return this.http.get<{id:number, comment:String, time: String}[]>(`api/review/get`);
  }

}
