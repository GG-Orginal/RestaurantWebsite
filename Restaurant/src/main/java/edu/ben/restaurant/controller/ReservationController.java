package edu.ben.restaurant.controller;

import edu.ben.restaurant.model.Reservation;
import edu.ben.restaurant.model.Review;
import edu.ben.restaurant.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping("/makeReservation")
    public Reservation createReservation(@RequestBody Reservation resv) {
        return reservationService.createReservation(resv);
    }

    @GetMapping("/getAllReservations")
    public List<Reservation> getAllReviews() {
        return reservationService.getAllReservations();
    }


//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    Long id;
//    @Column
//    String location;
//    @Column
//    String name;
//    @Column
//    String datetime;
//    @Column
//    Long howMany;
//    @Column
//    String confirmationNumber;
}
