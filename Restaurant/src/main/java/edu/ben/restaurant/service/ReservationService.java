package edu.ben.restaurant.service;

import edu.ben.restaurant.model.Reservation;
import edu.ben.restaurant.model.Review;
import edu.ben.restaurant.repo.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.net.http.HttpResponse;
import java.util.List;


@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) {

        if (reservation.getConfirmationNumber().length() < 4 ||
        reservation.getDatetime() == null ||
        reservation.getLocation() == null ||
        reservation.getHowMany() < 1 ||
        reservation.getName() == null ||
        reservation.getName() == "" ||
        reservation.getPhoneNumber() == "" ||
        reservation.getPhoneNumber() == null){
            System.out.println("NOOOOOO!!!!!");
            return new Reservation();
        }

        Reservation newResvervation = new Reservation();
        newResvervation.setLocation(reservation.getLocation());
        newResvervation.setDatetime(reservation.getDatetime());
        newResvervation.setName(reservation.getName());
        newResvervation.setHowMany(reservation.getHowMany());
        newResvervation.setConfirmationNumber(reservation.getConfirmationNumber());
        newResvervation.setPhoneNumber(reservation.getPhoneNumber());
        reservationRepository.save(newResvervation);
        return newResvervation;
    }

    public List<Reservation> getAllReservations() {
        List<Reservation> resvs = reservationRepository.findAll();
        return resvs;
    }
}
