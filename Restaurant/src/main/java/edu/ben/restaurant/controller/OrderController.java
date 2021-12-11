package edu.ben.restaurant.controller;

import edu.ben.restaurant.model.MenuItem;
import edu.ben.restaurant.model.Orders;
import edu.ben.restaurant.model.PlacedOrderReturn;
import edu.ben.restaurant.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrdersService ordersService;

    @PostMapping
    public ResponseEntity createOrder(@RequestBody Orders Orders) {
        PlacedOrderReturn placedOrder = ordersService.createOrder(Orders);

        return new ResponseEntity(placedOrder,  HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Orders>> getAllOrders() {
        return new ResponseEntity(ordersService.getAllOrders(), HttpStatus.OK);
    }
}
