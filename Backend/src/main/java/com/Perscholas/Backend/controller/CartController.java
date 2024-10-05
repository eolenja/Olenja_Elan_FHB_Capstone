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
    private CartService cartService;

    @PostMapping("/add")
    public String addItemToCart(@RequestBody CartItem item) {
        cartService.addItem(item);
        return "Item added to cart";
    }

    @GetMapping("/your/cart")
    public List<CartItem> getCartItems() {
        return cartService.getCartItems();
    }

    @PutMapping("/update")
    public String updateCartItem(@RequestBody CartItem item) {
        cartService.updateItem(item);
        return "Item updated";
    }

    @DeleteMapping("/remove/{productId}")
    public String removeItemFromCart(@PathVariable Long productId) {
        cartService.removeItem(productId);
        return "Item removed from cart";
    }

    @DeleteMapping("/clear")
    public String clearCart() {
        cartService.clearCart();
        return "Cart cleared";
    }
}