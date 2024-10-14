package com.erik.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order_, Long> {
    Optional<Order_> findByTicketNumber(Long ticketNumber);
    List<Order_> findByActive(boolean active);
}