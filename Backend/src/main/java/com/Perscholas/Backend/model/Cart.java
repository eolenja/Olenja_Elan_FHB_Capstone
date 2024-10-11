//package com.Perscholas.Backend.model;
//
//import jakarta.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//public class Cart {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    @JoinColumn(name = "cart_id") // Foreign key in CartItem table
//    private List<CartItem> items = new ArrayList<>(); // Initialize to avoid NullPointerException
//
//    // Constructors
//    public Cart() {
//    }
//
//    public Cart(List<CartItem> items) {
//        this.items = items;
//    }
//
//    // Getters and Setters
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public List<CartItem> getItems() {
//        return items;
//    }
//
//    public void setItems(List<CartItem> items) {
//        this.items = items;
//    }
//
//    // Method to add an item to the cart
//    public void addItem(CartItem item) {
//        this.items.add(item);
//    }
//
//    // Method to remove an item from the cart
//    public void removeItem(CartItem item) {
//        this.items.remove(item);
//    }
//}