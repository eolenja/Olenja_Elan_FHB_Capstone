package com.Perscholas.Backend.repository;

import com.Perscholas.Backend.model.BakeryItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BakeryItemRepository extends JpaRepository<BakeryItem, Long> {
    Optional<BakeryItem> findByName(String name); // Add this line
}