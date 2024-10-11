package com.Perscholas.Backend.controller;

import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.service.BakeryItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bakery-items")
public class BakeryItemController {
    private static final Logger logger = LoggerFactory.getLogger(BakeryItemController.class); // Define the logger

    @Autowired
    private BakeryItemService bakeryItemService;

    @GetMapping
    public List<BakeryItem> getAllBakeryItems() {
        logger.debug("Fetching all bakery items");
        return bakeryItemService.getAllBakeryItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BakeryItem> getBakeryItemById(@PathVariable Long id) {
        logger.debug("Fetching bakery item with ID: {}", id);
        return bakeryItemService.getBakeryItemById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public BakeryItem createBakeryItem(@RequestBody BakeryItem bakeryItem) {
        logger.debug("Received request to create bakery item: {}", bakeryItem);
        return bakeryItemService.createBakeryItem(bakeryItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BakeryItem> updateBakeryItem(@PathVariable Long id, @RequestBody BakeryItem bakeryItemDetails) {
        logger.debug("Updating bakery item with ID: {}", id);
        BakeryItem updatedBakeryItem = bakeryItemService.updateBakeryItem(id, bakeryItemDetails);
        return ResponseEntity.ok(updatedBakeryItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBakeryItem(@PathVariable Long id) {
        logger.debug("Deleting bakery item with ID: {}", id);
        bakeryItemService.deleteBakeryItem(id);
        return ResponseEntity.noContent().build();
    }
}