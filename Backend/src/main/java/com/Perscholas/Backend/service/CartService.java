package com.Perscholas.Backend.service;

import com.Perscholas.Backend.model.CartItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    private final List<CartItem> cartItems = new ArrayList<>();

    public void addItem(CartItem item) {
        cartItems.add(item);
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void updateItem(CartItem updatedItem) {
        Optional<CartItem> existingItemOpt = cartItems.stream()
                .filter(item -> item.getId().equals(updatedItem.getId()))
                .findFirst();

        existingItemOpt.ifPresent(existingItem -> {
            existingItem.setQuantity(updatedItem.getQuantity());
            // Update other fields if necessary
        });
    }

    public void removeItem(Long productId) {
        cartItems.removeIf(item -> item.getId().equals(productId));
    }

    public void clearCart() {
        cartItems.clear();
    }
}