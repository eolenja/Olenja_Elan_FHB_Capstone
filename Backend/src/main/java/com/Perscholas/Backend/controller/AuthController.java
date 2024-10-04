//// src/main/java/com/example/demo/controller/AuthController.java
//package com.Perscholas.Backend.controller;
//
//
//import com.Perscholas.Backend.model.User;
//import com.Perscholas.Backend.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/auth")
//public class AuthController {
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/login")
//    public User login(@RequestBody User user) {
//        return userService.authenticate(user.getUsername(), user.getPassword());
//    }
//}