package com.Perscholas.Backend.service;

import com.Perscholas.Backend.model.User;
import com.Perscholas.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) { // In a real app, use hashed passwords
            return user;
        }
        return null; // Authentication failed
    }

    public User register(User user) {
        // Check if the user already exists
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new RuntimeException("User already exists");
        }
        // Save the new user (consider hashing the password before saving)
        return userRepository.save(user);
    }
}