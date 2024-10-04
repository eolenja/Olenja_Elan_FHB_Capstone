package com.Perscholas.Backend.repository;
import com.Perscholas.Backend.model.BakeryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BakeryItemRepository extends JpaRepository<BakeryItem, Long> {
}