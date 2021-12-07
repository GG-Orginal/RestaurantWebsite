import { Component, OnInit } from '@angular/core';
import {ReviewService} from "../service/review.service";
import {Router} from "@angular/router";

class review {
  constructor(
    public id: number,
    public comment: string,
    public time: string
  ) {
  }
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  title = "Reviews"
  reviewList: review[] = [];

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
    this.getAllReviews()
  }

  getAllReviews() {
    this.reviewService.getAllReviews().subscribe(response => {
      let i = 0;
      while (i in response){
        let newreview = <review>({
          id: response[i].id,
          comment: response[i].comment,
          time: response[i].time
        })
        this.reviewList.push(newreview);
        i++
      }
      this.reviewList.reverse()
    });
  }

  temptext: string = "Post Review Here!";
  temptime: string = new Date().toLocaleString()

  public postReview = (data: any) => {
    this.temptime = new Date().toLocaleString()
    this.reviewService.postReview(data).subscribe((resp) => {
      this.router.navigate(['review'])
    }, err => {
      alert(JSON.stringify(err));
    })
    alert("Please Wait!");
    this.reviewList = [];
    this.getAllReviews();
  }
}
