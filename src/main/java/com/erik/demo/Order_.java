package com.erik.demo;

import java.time.*;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table
public class Order_ implements Comparable<Order_> {
    @Id
    @SequenceGenerator(
            name = "order_sequence",
            sequenceName = "order_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_sequence"
    )

    Long ticketNumber;
    Long priority;
    boolean completed;
    LocalDateTime initTime;
    LocalDateTime OTD;

    @Convert(converter = ItemListConverter.class)
    List<Item> items;

    public Order_(Long ticketNumber, List<Item> itemList) {
        this.initTime = LocalDateTime.now();
        this.ticketNumber = ticketNumber;
        this.priority = 0L;
        this.completed = false;
        this.OTD = null;
        this.items = itemList;
    }

    public Order_() {}

    public Long getTicketNumber() {
        return ticketNumber;
    }

    public void setTicketNumber(Long ticketNumber) {
        this.ticketNumber = ticketNumber;
    }

    public Long getPriority() {
        return priority;
    }

    public void setPriority(Long priority) {
        this.priority = priority;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public LocalDateTime getInitTime() {
        return initTime;
    }

    public void setInitTime(LocalDateTime initTime) {
        this.initTime = initTime;
    }

    public LocalDateTime getOTD() {
        return OTD;
    }

    public void setOTD(LocalDateTime OTD) {
        this.OTD = OTD;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    @Override
    public int compareTo(Order_ otherOrder) {
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
    //todo: i don't know why it things this is a field??
//    public String getTimeElapsed() {
//        DateTimeFormatter timeFormat = DateTimeFormatter.ofPattern("mm:ss");
//        LocalDateTime currentTime = LocalDateTime.now();
//
//        System.out.println(Duration.between(initTime, currentTime).toSeconds());
//        return null;
//    }

    private int getTotal(List<Item> items) {
        //todo: map build times to another database
        int total = 0;
        for (Item item : items) {
            if (item.name.equals("crunchy-taco")) {
                total = total + 10;
            } else {
                total = total + 120;
            }
        }
        return total;
    }

    @Override
    public String toString() {
        return String.valueOf(this.ticketNumber);
    }
}
