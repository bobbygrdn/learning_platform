package com.valoracademy.server.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.valoracademy.server.exception.ResourceNotFoundException;
import com.valoracademy.server.model.User;
import com.valoracademy.server.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("users")
    public User saveUser(@RequestBody User user) {
        return this.userRepository.save(user);
    }

    @GetMapping("users")
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + userId));
        return ResponseEntity.ok(user);
    }

    @PutMapping("users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
            @RequestBody User user) {

        User existingUser = this.userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        existingUser.setUsername(user.getUsername());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());

        User updatedUser = this.userRepository.save(existingUser);
        return ResponseEntity.ok(updatedUser);
    }

    @PatchMapping("users/{id}/role")
    public ResponseEntity<User> updateUserRole(@PathVariable("id") Long id,
            @RequestBody User user) {
        User existingUser = this.userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        existingUser.setRole(user.getRole());

        User updatedUser = this.userRepository.save(existingUser);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {
        User user = this.userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        this.userRepository.delete(user);
        return ResponseEntity.ok("User with ID: " + id + " has been deleted");
    }
}
