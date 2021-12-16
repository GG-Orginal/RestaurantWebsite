package edu.ben.restaurant.service;

import edu.ben.restaurant.model.Reservation;
import edu.ben.restaurant.repo.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) {
        return reservation;
    }

//    public Object getAllReservations() {
//
//    }
}
