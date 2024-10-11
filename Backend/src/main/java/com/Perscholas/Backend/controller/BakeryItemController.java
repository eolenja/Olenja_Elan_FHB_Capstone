
package com.Perscholas.Backend.controller;


import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.repository.BakeryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bakery-items")
public class BakeryItemController {
    @Autowired
    private BakeryItemRepository bakeryItemRepository;

    @GetMapping
    public List<BakeryItem> getAllBakeryItems() {
        return bakeryItemRepository.findAll();
    }

    @PostMapping
    public BakeryItem createBakeryItem(@RequestBody BakeryItem bakeryItem) {
        return bakeryItemRepository.save(bakeryItem);
    }


}