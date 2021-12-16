package edu.ben.restaurant.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column
    String location;
    @Column
    String name;
    @Column
    String datetime;
    @Column
    Long howMany;
    @Column
    String confirmationNumber;

}
