package edu.ben.restaurant.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column
    String menuItemName;
    @Column
    String description;
    @Column
    Integer cost;
    @Column
    Integer timeToCook;

}
