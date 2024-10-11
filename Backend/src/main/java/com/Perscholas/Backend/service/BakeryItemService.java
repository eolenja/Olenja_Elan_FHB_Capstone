package com.Perscholas.Backend.service;

import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.repository.BakeryItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BakeryItemService {
    private static final Logger logger = LoggerFactory.getLogger(BakeryItemService.class);

    @Autowired
    private BakeryItemRepository bakeryItemRepository;

    // Get all bakery items
    public List<BakeryItem> getAllBakeryItems() {
        logger.debug("Fetching all bakery items");
        return bakeryItemRepository.findAll();
    }

    // Get a bakery item by ID
    public Optional<BakeryItem> getBakeryItemById(Long id) {
        logger.debug("Fetching bakery item with ID: {}", id);
        return bakeryItemRepository.findById(id);
    }

    // Create a new bakery item
    @Transactional
    public BakeryItem createBakeryItem(BakeryItem bakeryItem) {
        // Check for existing item with the same name (or any other unique field)
        if (bakeryItemRepository.findByName(bakeryItem.getName()).isPresent()) {
            logger.warn("Bakery item with name '{}' already exists", bakeryItem.getName());
            throw new RuntimeException("Bakery item with this name already exists");
        }
        logger.debug("Creating new bakery item: {}", bakeryItem);
        return bakeryItemRepository.save(bakeryItem);
    }

    // Update an existing bakery item
    @Transactional
    public BakeryItem updateBakeryItem(Long id, BakeryItem bakeryItemDetails) {
        BakeryItem bakeryItem = bakeryItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bakery item not found"));

        logger.debug("Updating bakery item with ID: {}", id);
        bakeryItem.setName(bakeryItemDetails.getName());
        bakeryItem.setDescription(bakeryItemDetails.getDescription());
        bakeryItem.setPrice(bakeryItemDetails.getPrice());
        bakeryItem.setImageUrl(bakeryItemDetails.getImageUrl());

        return bakeryItemRepository.save(bakeryItem);
    }

    // Delete a bakery item
    @Transactional
    public void deleteBakeryItem(Long id) {
        logger.debug("Deleting bakery item with ID: {}", id);
        bakeryItemRepository.deleteById(id);
    }

    // Optional: Method to save multiple bakery items at once
    @Transactional
    public void saveAllBakeryItems(List<BakeryItem> items) {
        for (BakeryItem item : items) {
            // Check for existing item with the same name
            if (bakeryItemRepository.findByName(item.getName()).isPresent()) {
                logger.warn("Bakery item with name '{}' already exists, skipping.", item.getName());
                continue; // Skip this item if it already exists
            }
            logger.debug("Creating bakery item: {}", item);
            bakeryItemRepository.save(item);
        }
    }
}