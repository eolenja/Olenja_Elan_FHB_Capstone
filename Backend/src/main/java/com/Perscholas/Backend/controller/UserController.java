package com.Perscholas.Backend.controller;

import com.Perscholas.Backend.model.User;
import com.Perscholas.Backend.service.UserService;
import com.Perscholas.Backend.util.JwtUtil; // Import the JwtUtil class
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users") // Base URL for user-related endpoints
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil; // Add JwtUtil as a field

    @PostMapping("/register") // Endpoint for user registration
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.register(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login") // Optional: Endpoint for user login
    public ResponseEntity<String> loginUser(@RequestBody User user) { // Change return type to String for token
        User authenticatedUser = userService.authenticate(user.getUsername(), user.getPassword());
        if (authenticatedUser != null) {
            String token = jwtUtil.generateToken(authenticatedUser.getUsername()); // Generate token
            return ResponseEntity.ok(token); // Return the token
        }
        return ResponseEntity.status(401).body(null); // Unauthorized
    }

    @GetMapping("/me") // Endpoint to get the current user's information
    public ResponseEntity<User> getCurrentUser(@AuthenticationPrincipal User user) {
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(401).body(null);
    }
}