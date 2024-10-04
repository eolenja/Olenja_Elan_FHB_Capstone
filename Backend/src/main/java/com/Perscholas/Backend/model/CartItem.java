package com.Perscholas.Backend.model;

public class CartItem {
    private String id; // Item ID
    private String name; // Item name
    private int quantity; // Quantity of the item

    // Constructors, getters, and setters
    public CartItem(String id, String name, int quantity) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}