package com.Perscholas.Backend.service;

import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.repository.BakeryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BakeryItemService {

    @Autowired
    private BakeryItemRepository bakeryItemRepository;

    public Optional<BakeryItem> getBakeryItemById(Long id) {
        return bakeryItemRepository.findById(id);
    }

    public List<BakeryItem> getAllBakeryItems() {
        return bakeryItemRepository.findAll();
    }

    public BakeryItem createBakeryItem(BakeryItem bakeryItem) {
        return bakeryItemRepository.save(bakeryItem);
    }

    public BakeryItem updateBakeryItem(Long id, BakeryItem bakeryItemDetails) {
        BakeryItem existingItem = bakeryItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bakery item not found"));

        existingItem.setName(bakeryItemDetails.getName());
        existingItem.setDescription(bakeryItemDetails.getDescription());
        existingItem.setPrice(bakeryItemDetails.getPrice());
        existingItem.setImageUrl(bakeryItemDetails.getImageUrl());

        return bakeryItemRepository.save(existingItem);
    }

    public void deleteBakeryItem(Long id) {
        bakeryItemRepository.deleteById(id);
    }
}