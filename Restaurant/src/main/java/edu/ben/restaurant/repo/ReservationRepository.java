package edu.ben.restaurant.repo;

import edu.ben.restaurant.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
