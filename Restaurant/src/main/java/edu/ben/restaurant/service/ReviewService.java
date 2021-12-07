package edu.ben.restaurant.service;

import edu.ben.restaurant.model.Review;
import edu.ben.restaurant.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public void createReview(Review review) {
        Review newReview = new Review();
        newReview.setComment(review.getComment());
        newReview.setTime(review.getTime());
        reviewRepository.save(newReview);
    }

    public Object getAllReviews() {
        List<Review> reviews = reviewRepository.findAll();
        return reviews;
    }
}
