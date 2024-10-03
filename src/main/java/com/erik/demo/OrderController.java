package com.erik.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping(path = "/recent")
    public Long mostRecent() {
        return orderService.mostRecent().orElseThrow(() -> new IllegalStateException("No orders found")).ticketNumber;
    }

    @PostMapping
    public void addOrder(@RequestBody Order_ order) {
        orderService.addOrder(order);
    }

    @DeleteMapping(path = "{ticketNumber}")
    public void bumpOrder(@PathVariable("ticketNumber") Long ticketNumber) {
        orderService.bumpOrder(ticketNumber);
    }

    @PutMapping(path = "{ticketNumber}")
    public void updateOrder(
            @PathVariable("ticketNumber") Long ticketNumber,
            @RequestParam(required = false) Long priority,
            @RequestParam(required = false) boolean completed,
            @RequestParam(required = false) LocalDateTime OTD){
        orderService.updateOrder(ticketNumber, priority, completed, OTD);
    }
}
