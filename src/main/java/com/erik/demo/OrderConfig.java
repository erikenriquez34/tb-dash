package com.erik.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class OrderConfig {

    @Bean
    CommandLineRunner commandLineRunner(OrderRepository repository) {
        return args -> {
            // Create Item objects
            Item quesadilla = new Item("quesadilla", 35);
            Item crunchyTaco = new Item("crunchy-taco", 8);
            List<Item> orders = new ArrayList<>();
            
            orders.add(quesadilla);
            orders.add(crunchyTaco);

            // Create an Order_ object
            Order_ cole = new Order_(0L, orders);

            // Save the Order_ object to the repository
            repository.saveAll(List.of(cole));
        };
    }
}