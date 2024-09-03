package com.erik.demo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties
public class Item {
    String name;
    int buildTime;

    public Item(String name, int buildTime) {
        this.name = name;
        this.buildTime = buildTime;
    }

    public Item() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
