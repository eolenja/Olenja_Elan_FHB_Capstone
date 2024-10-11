//package com.Perscholas.Backend.loader;
//import com.Perscholas.Backend.model.BakeryItem;
//import com.Perscholas.Backend.repository.BakeryItemRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class DataLoader implements CommandLineRunner {
//
//    @Autowired
//    private BakeryItemRepository bakeryItemRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        // Sample bakery items
//        BakeryItem item1 = new BakeryItem();
//        item1.setName("Chocolate Cake");
//        item1.setDescription("Rich and moist chocolate cake topped with chocolate ganache.");
//        item1.setPrice(25.99);
//        item1.setImageUrl("http://example.com/images/chocolate_cake.jpg");
//        bakeryItemRepository.save(item1);
//
//        BakeryItem item2 = new BakeryItem();
//        item2.setName("Croissant");
//        item2.setDescription("Flaky and buttery croissant, perfect for breakfast.");
//        item2.setPrice(3.50);
//        item2.setImageUrl("http://example.com/images/croissant.jpg");
//        bakeryItemRepository.save(item2);
//
//        BakeryItem item3 = new BakeryItem();
//        item3.setName("Apple Pie");
//        item3.setDescription("Classic apple pie with a flaky crust and cinnamon-spiced apples.");
//        item3.setPrice(15.00);
//        item3.setImageUrl("http://example.com/images/apple_pie.jpg");
//        bakeryItemRepository.save(item3);
//
//        BakeryItem item4 = new BakeryItem();
//        item4.setName("Cheesecake");
//        item4.setDescription("Creamy cheesecake with a graham cracker crust and fresh strawberries.");
//        item4.setPrice(20.00);
//        item4.setImageUrl("http://example.com/images/cheesecake.jpg");
//        bakeryItemRepository.save(item4);
//
//        BakeryItem item5 = new BakeryItem();
//        item5.setName("Blueberry Muffines");
//        item5.setDescription("Blueberry Muffins");
//        item5.setPrice(2.00);
//        item5.setImageUrl("http://example.com/images/blueberrymuffins.jpg");
//        bakeryItemRepository.save(item5);
//    }
//}
