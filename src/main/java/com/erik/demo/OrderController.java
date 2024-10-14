package com.erik.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = {"api/orders", "api/orders/active"})

public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

//    @GetMapping(path = "/")
//    public List<Order_> getOrders() {
//        return orderService.getOrders();
//    }

    @GetMapping(path = "/active")
    public List<Order_> getActiveOrders() {
        return orderService.getActive();
    }

    @PutMapping("/bump")
    public String bumpOrder() {
        return orderService.bumpOrder();
    }

    @PostMapping("/post")
    public Order_ addOrder(@RequestBody Order_ order) {
        return orderService.addOrder(order);
    }
}
