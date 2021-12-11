package edu.ben.restaurant.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PlacedOrderReturn {

    private Long orderNumber;
    private Integer orderReadyIn;
}
