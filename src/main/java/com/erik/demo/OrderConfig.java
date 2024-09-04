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
            Item quesadilla = new Item("quesadilla", 1);
            Item crunchyTaco = new Item("crunchy-taco", 2);
            List<Item> coleItems = new ArrayList<>();
            List<Item> jessItems = new ArrayList<>();
            
            jessItems.add(quesadilla);
            coleItems.add(crunchyTaco);

            Order_ cole = new Order_(3L, coleItems);
            Order_ jess = new Order_(5L, jessItems);

            MaxHeap<Order_> dash = new MaxHeap<>(4);

            dash.insert(cole);
            dash.insert(jess);

            long curr = 1L;
            while (!dash.isEmpty()) {
                dash.remove().priority = curr;
                curr++;
            }

            repository.saveAll(List.of(cole, jess));
        };
    }
}