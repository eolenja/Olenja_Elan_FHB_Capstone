package com.Perscholas.Backend.test;

import com.Perscholas.Backend.controller.BakeryItemController;
import com.Perscholas.Backend.model.BakeryItem;
import com.Perscholas.Backend.service.BakeryItemService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BakeryItemController.class)
class BakeryItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BakeryItemService bakeryItemService;

    @Test
    void testGetAllBakeryItems() throws Exception {
        BakeryItem item1 = new BakeryItem(1L, "Croissant", "Buttery and flaky", 2.5, "croissant.jpg");
        BakeryItem item2 = new BakeryItem(2L, "Baguette", "Crispy and chewy", 1.5, "baguette.jpg");

        when(bakeryItemService.getAllBakeryItems()).thenReturn(Arrays.asList(item1, item2));

        mockMvc.perform(get("/api/bakery-items")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Croissant"))
                .andExpect(jsonPath("$[1].name").value("Baguette"));
    }

    @Test
    void testGetBakeryItemById() throws Exception {
        BakeryItem item = new BakeryItem(1L, "Croissant", "Buttery and flaky", 2.5, "croissant.jpg");

        when(bakeryItemService.getBakeryItemById(1L)).thenReturn(Optional.of(item));

        mockMvc.perform(get("/api/bakery-items/1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Croissant"));
    }

    @Test
    void testCreateBakeryItem() throws Exception {
        BakeryItem item = new BakeryItem(null, "Croissant", "Buttery and flaky", 2.5, "croissant.jpg");

        when(bakeryItemService.createBakeryItem(any(BakeryItem.class))).thenReturn(new BakeryItem(1L, "Croissant", "Buttery and flaky", 2.5, "croissant.jpg"));

        mockMvc.perform(post("/api/bakery-items")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Croissant\",\"description\":\"Buttery and flaky\",\"price\":2.5,\"imageUrl\":\"croissant.jpg\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Croissant"));
    }

    @Test
    void testUpdateBakeryItem() throws Exception {
        BakeryItem updatedItem = new BakeryItem(1L, "Updated Croissant", "Buttery and flaky", 2.5, "croissant.jpg");

        when(bakeryItemService.updateBakeryItem(Mockito.eq(1L), any(BakeryItem.class))).thenReturn(updatedItem);

        mockMvc.perform(put("/api/bakery-items/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Updated Croissant\",\"description\":\"Buttery and flaky\",\"price\":2.5,\"imageUrl\":\"croissant.jpg\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Updated Croissant"));
    }

    @Test
    void testDeleteBakeryItem() throws Exception {
        Mockito.doNothing().when(bakeryItemService).deleteBakeryItem(1L);

        mockMvc.perform(delete("/api/bakery-items/1"))
                .andExpect(status().isNoContent());
    }
}