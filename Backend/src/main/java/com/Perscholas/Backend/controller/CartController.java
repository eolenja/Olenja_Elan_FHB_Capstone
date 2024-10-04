package com.Perscholas.Backend.controller;

import com.Perscholas.Backend.model.CartItem;
import com.Perscholas.Backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService; // Use CartService to manage cart items

    @PostMapping("/add")
    public String addItemToCart(@RequestBody CartItem item) {
        cartService.addItem(item); // Use the service to add the item
        return "Item added to cart";
    }

    @GetMapping // Change this to match the endpoint you want
    public List<CartItem> getCartItems() {
        return cartService.getCartItems(); // Use the service to get cart items
    }

    @DeleteMapping("/clear") // Optional: Endpoint to clear the cart
    public String clearCart() {
        cartService.clearCart();
        return "Cart cleared";
    }
}