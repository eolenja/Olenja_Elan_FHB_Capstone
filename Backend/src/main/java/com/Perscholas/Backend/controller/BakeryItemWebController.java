package com.Perscholas.Backend.controller;

import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.service.BakeryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class BakeryItemWebController {

    @Autowired
    private BakeryItemService bakeryItemService;

    @GetMapping("/bakery-items/details/{id}")
    public String getBakeryItemDetails(@PathVariable Long id, Model model) {
        BakeryItem bakeryItem = bakeryItemService.getBakeryItemById(id)
                .orElseThrow(() -> new RuntimeException("Bakery item not found"));
        model.addAttribute("bakeryItem", bakeryItem);
        return "bakeryItemDetails"; // This should match the name of your HTML template
    }
}