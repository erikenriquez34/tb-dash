package com.erik.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class OrderConfig {
    ArrayList<Item> orders = new ArrayList<>();

    @Bean
    CommandLineRunner commandLineRunner(OrderRepository repository) {
        return args -> {
            Order_ cole = new Order_(
                    0L,
                    orders
            );

            repository.saveAll(
                    List.of(cole)
            );
        };
    }
}
