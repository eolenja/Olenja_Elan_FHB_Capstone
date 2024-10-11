package com.Perscholas.Backend.controller;

import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.service.BakeryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bakery-items")
public class BakeryItemController {

    @Autowired
    private BakeryItemService bakeryItemService;

    @GetMapping
    public List<BakeryItem> getAllBakeryItems() {
        return bakeryItemService.getAllBakeryItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BakeryItem> getBakeryItemById(@PathVariable Long id) {
        return bakeryItemService.getBakeryItemById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public BakeryItem createBakeryItem(@RequestBody BakeryItem bakeryItem) {
        return bakeryItemService.createBakeryItem(bakeryItem);
    }

    @PutMapping("/{id}")
    public BakeryItem updateBakeryItem(@PathVariable Long id, @RequestBody BakeryItem bakeryItemDetails) {
        return bakeryItemService.updateBakeryItem(id, bakeryItemDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBakeryItem(@PathVariable Long id) {
        bakeryItemService.deleteBakeryItem(id);
        return ResponseEntity.noContent().build();
    }
}