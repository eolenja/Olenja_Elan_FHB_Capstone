package com.Perscholas.Backend.controller;

import com.Perscholas.Backend.model.User;
import com.Perscholas.Backend.model.LoginResponse; // Import the LoginResponse class
import com.Perscholas.Backend.service.UserService;
import com.Perscholas.Backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    // User Registration
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        try {
            User registeredUser = userService.register(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.status(400).body(null); // Handle registration errors
        }
    }

    // User Login
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody User user) {
        System.out.println("Attempting to log in user: " + user.getUsername());
        User authenticatedUser = userService.authenticate(user.getUsername(), user.getPassword());

        if (authenticatedUser != null) {
            // Generate a JWT token for session management
            String token = jwtUtil.generateToken(authenticatedUser.getUsername());
            System.out.println("Token generated for user: " + authenticatedUser.getUsername());
            return ResponseEntity.ok(new LoginResponse(token)); // Return the token in a structured response
        }

        System.out.println("Authentication failed for user: " + user.getUsername());
        return ResponseEntity.status(401).body(new LoginResponse("Invalid username or password")); // Unauthorized with message
    }

    // Get Current User
    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(@AuthenticationPrincipal User user) {
        if (user != null) {
            return ResponseEntity.ok(user); // Return the authenticated user's info
        }
        return ResponseEntity.status(401).body(null); // Unauthorized
    }
}