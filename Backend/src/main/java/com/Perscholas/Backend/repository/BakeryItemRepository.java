package com.Perscholas.Backend.repository;

import com.Perscholas.Backend.model.BakeryItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BakeryItemRepository extends JpaRepository<BakeryItem, Long> {


    Optional<BakeryItem> findByName(String name);





    Page<BakeryItem> findAll(Pageable pageable);


    @Query("SELECT b FROM BakeryItem b WHERE b.price BETWEEN :minPrice AND :maxPrice")
    List<BakeryItem> findByPriceRange(double minPrice, double maxPrice);
}