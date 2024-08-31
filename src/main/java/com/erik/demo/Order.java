package com.erik.demo;

import java.time.*;
import java.time.format.*;
import java.util.ArrayList;

public class Order implements Comparable<Order> {
    ArrayList<Item> items;
    LocalDateTime initTime;
    int ticketNumber;
    boolean completed;
    public Order(int ticketNumber, ArrayList<Item> items) {
        initTime = LocalDateTime.now();

        this.completed = false;
        this.ticketNumber = ticketNumber;
        this.items = items;
    }
    @Override
    public int compareTo(Order otherOrder) {
        int estimatedSelf = getTotal(items);
        int estimatedOther = getTotal(otherOrder.items);

        if (estimatedSelf == estimatedOther) {
            return otherOrder.initTime.compareTo(this.initTime);
        } else if (estimatedSelf < (estimatedOther * 0.125)) {
            return 1;
        } else {
            return otherOrder.initTime.compareTo(this.initTime);
        }
    }
    public String getTimeElapsed() {
        DateTimeFormatter timeFormat = DateTimeFormatter.ofPattern("mm:ss");
        LocalDateTime currentTime = LocalDateTime.now();

        System.out.println(Duration.between(initTime, currentTime).toSeconds());
        return null;
    }
    private int getTotal(ArrayList<Item> items) {
        int total = 0;
        for (Item item : items) {
            total = total + item.buildTime;
        }
        return total;
    }

    @Override
    public String toString() {
        return String.valueOf(this.ticketNumber);
    }
}
