package edu.ben.restaurant.repo;

import edu.ben.restaurant.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findAllByPhoneNumber(String phone);
    List<Reservation> findAllByConfirmationNumber(String confno);

}
