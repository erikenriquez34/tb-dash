package com.erik.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order_> getOrders() {
        return orderService.getOrders();
    }

    @PostMapping
    public void addOrder(@RequestBody Order_ order) {
        orderService.addOrder(order);
    }

    @DeleteMapping(path = "{ticketNumber}")
    public void bumpOrder(@PathVariable("ticketNumber") Long ticketNumber) {
        orderService.bumpOrder(ticketNumber);
    }
}
