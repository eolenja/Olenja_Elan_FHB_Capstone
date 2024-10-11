package com.Perscholas.Backend.service;

import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.repository.BakeryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BakeryItemService {

    @Autowired
    private BakeryItemRepository bakeryItemRepository;

    // Get a bakery item by its name
    public Optional<BakeryItem> getBakeryItemByName(String name) {
        return bakeryItemRepository.findByName(name);
    }



    // Get bakery items within a price range
    public List<BakeryItem> getBakeryItemsByPriceRange(double minPrice, double maxPrice) {
        return bakeryItemRepository.findByPriceRange(minPrice, maxPrice);
    }

    // Delete a bakery item by ID
    public void deleteBakeryItem(Long id) {
        bakeryItemRepository.deleteById(id);
    }

    // Update an existing bakery item
    public BakeryItem updateBakeryItem(Long id, BakeryItem bakeryItemDetails) {
        BakeryItem existingItem = bakeryItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bakery item not found"));

        existingItem.setName(bakeryItemDetails.getName());
        existingItem.setDescription(bakeryItemDetails.getDescription());
        existingItem.setPrice(bakeryItemDetails.getPrice());
        existingItem.setImageUrl(bakeryItemDetails.getImageUrl());


        return bakeryItemRepository.save(existingItem);
    }

    // Get a bakery item by ID
    public Optional<BakeryItem> getBakeryItemById(Long id) {
        return bakeryItemRepository.findById(id);
    }

    // Create a new bakery item
    public BakeryItem createBakeryItem(BakeryItem bakeryItem) {
        return bakeryItemRepository.save(bakeryItem);
    }

    // Get all bakery items
    public List<BakeryItem> getAllBakeryItems() {
        return bakeryItemRepository.findAll();
    }
}