package edu.ben.restaurant.service;

import edu.ben.restaurant.model.MenuItem;
import edu.ben.restaurant.model.Orders;
import edu.ben.restaurant.repo.MenuItemRepository;
import edu.ben.restaurant.repo.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private MenuItemRepository menuItemRepository;


    public void createOrder(Orders orders) {
        Orders newOrders = new Orders();
        newOrders.setFirstName(orders.getFirstName());
        newOrders.setLastName(orders.getLastName());
        newOrders.setPhoneNumber(orders.getPhoneNumber());
        newOrders.setAddress(orders.getAddress());
        newOrders.setDelivery(orders.getDelivery());
        for (MenuItem item : orders.getOrderItems()) {
            newOrders.createOrderItemsList(menuItemRepository.findById(item.getId()).get());
        }
        newOrders.setTotal(orders.getTotal());
        orderRepository.save(newOrders);
    }

    public Object getAllOrders() {
        List<Orders> Orders = orderRepository.findAll();
        return Orders;
    }
}
