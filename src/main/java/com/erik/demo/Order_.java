package com.erik.demo;

import java.time.*;
import java.time.format.*;
import java.util.ArrayList;

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
    String itemList;
    LocalDateTime OTD;

    @Transient
    ArrayList<Item> items;

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

    public String getItemList() {
        return itemList;
    }

    public void setItemList(String itemList) {
        this.itemList = itemList;
    }

    public LocalDateTime getOTD() {
        return OTD;
    }

    public void setOTD(LocalDateTime OTD) {
        this.OTD = OTD;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    public Order_(Long ticketNumber, ArrayList<Item> itemList) {
        this.initTime = LocalDateTime.now();
        this.ticketNumber = ticketNumber;
        this.priority = 0L;
        this.completed = false;
        this.itemList = "";
        this.OTD = null;
    }

    public Order_() {}

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
