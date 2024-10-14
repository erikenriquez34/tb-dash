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

    public void addOrder(Order_ order) {
        Optional<Order_> orderOptional = orderRepository.findByTicketNumber(order.getTicketNumber());
        if (orderOptional.isPresent()) {
            throw new IllegalStateException("Duplicate ticket numbers found.");
        }
        orderRepository.save(order);
    }

    public void bumpOrder(Long ticketNumber) {
        boolean exists = orderRepository.existsById(ticketNumber);

        if (!exists) {
            throw new IllegalStateException("Ticket does not exist.");
        }
        orderRepository.deleteById(ticketNumber);
    }

    @Transactional
    public void updateOrder(Long ticketNumber, Long priority, boolean completed) {
        Order_ order = orderRepository.findByTicketNumber(ticketNumber).
                orElseThrow(() -> new IllegalStateException("Ticket does not exist."));

        if (!priority.equals(order.getPriority())) {
            order.setPriority(priority);
        }

        order.setCompleted(completed);
    }

    public List<Order_> getInProgress() {
        return orderRepository.findByCompleted(false);
    }

    public Optional<Order_> mostRecent() {
        List<Order_> orders = getOrders();
        if (orders.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(orders.get(orders.size() - 1));
    }

    public Order_ saveOrder(Order_ order) {
        return orderRepository.save(order);
    }
}