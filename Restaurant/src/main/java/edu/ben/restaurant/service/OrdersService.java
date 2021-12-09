package edu.ben.restaurant.service;

import edu.ben.restaurant.model.MenuItem;
import edu.ben.restaurant.model.OrderItemList;
import edu.ben.restaurant.model.Orders;
import edu.ben.restaurant.repo.MenuItemRepository;
import edu.ben.restaurant.repo.OrderRepository;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@Service
public class OrdersService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private MenuItemRepository menuItemRepository;

    public Orders createOrder(Orders orders) {
        Orders newOrders = new Orders();
        newOrders.setFirstName(orders.getFirstName());
        newOrders.setLastName(orders.getLastName());
        newOrders.setPhoneNumber(orders.getPhoneNumber());
        newOrders.setAddress(orders.getAddress());
        newOrders.setDelivery(orders.getDelivery());
        for (MenuItem item : orders.getOrderItems()) {
            newOrders.createOrderItemsList(menuItemRepository.findById(item.getId()).get());
            OrderItemList a = new OrderItemList();
            a.setMenuItems(menuItemRepository.findById(item.getId()).get());
            boolean repeat = false;
            for (OrderItemList j : newOrders.getOrderItemLists()) {
                if (j.getMenuItems().equals(a.getMenuItems())) {
                    repeat = true;
                    break;
                }
            }
            if (repeat) {
                int index = IntStream.range(0, newOrders.getOrderItemLists().size())
                        .filter(i -> newOrders.getOrderItemLists().get(i).getMenuItems().equals(a.getMenuItems()))
                        .findFirst()
                        .orElse(-1);
                newOrders.getOrderItemLists().get(index).setQuantity(newOrders.getOrderItemLists().get(index).getQuantity() + 1);
            } else {
                a.setQuantity(1);
                newOrders.getOrderItemLists().add(a);
            }
        }
        newOrders.setTotal(orders.getTotal());
        Orders order = orderRepository.save(newOrders);
        return order;
    }

    public Object getAllOrders() {
        List<Orders> Orders = orderRepository.findAll();
        return Orders;
    }
}
