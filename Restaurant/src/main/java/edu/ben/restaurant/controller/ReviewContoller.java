package edu.ben.restaurant.controller;

import edu.ben.restaurant.model.Review;
import edu.ben.restaurant.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/review")
public class ReviewContoller {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/post")
    public ResponseEntity createReview(@RequestBody Review review) {
        reviewService.createReview(review);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Review>> getAllReviews() {
        return new ResponseEntity(reviewService.getAllReviews(), HttpStatus.OK);
    }
}
