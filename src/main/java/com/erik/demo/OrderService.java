package com.erik.demo;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order_> getOrders() {
        return orderRepository.findAll();
    }

    public List<Order_> getActive() {
        return orderRepository.findByActive(true);
    }

    public Order_ addOrder(Order_ order) {
        Optional<Order_> orderOptional = orderRepository.findByTicketNumber(order.getTicketNumber());
        if (orderOptional.isPresent()) {
            throw new IllegalStateException("Duplicate ticket numbers found.");
        }
        return orderRepository.save(order);
    }

    @Transactional
    public void updateOrder(Long ticketNumber, Long priority, boolean completed, boolean active) {
        Order_ order = orderRepository.findByTicketNumber(ticketNumber).
                orElseThrow(() -> new IllegalStateException("Ticket does not exist."));

        if (!priority.equals(order.getPriority())) {
            order.setPriority(priority);
        }

        order.setActive(active);
        order.setCompleted(completed);
    }

    public Optional<Order_> mostRecent() {
        List<Order_> orders = getOrders();
        if (orders.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(orders.get(orders.size() - 1));
    }

    public String bumpOrder() {
        // Get the first active order from the repository
        Order_ order = orderRepository.findByActive(true).get(0);

        if (order == null) {
            return "No active order found.";
        }

        order.setActive(false);

        orderRepository.save(order);
        return "Top active order has been deactivated.";
    }
}