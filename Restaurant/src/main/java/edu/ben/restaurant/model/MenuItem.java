package edu.ben.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String menuItemName;
    @Column
    private String description;
    @Column
    private String typeOfMeal;
    @Column
    private Integer cost;
    @Column
    private Integer timeToCook;
    @JsonIgnore
    @ManyToMany(mappedBy = "orderItems")
    private Set<Orders> orders = new HashSet<>();

}
