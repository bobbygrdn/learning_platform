package com.robertgordon.valoracademy.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.model.User;
import com.robertgordon.valoracademy.service.UserService;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("users")
    public User saveUser(@RequestBody User user) {
        return this.userService.saveUser(user);
    }

    @GetMapping("users")
    public List<User> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId) {
        User user = this.userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @PutMapping("users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
            @RequestBody User user) {

        User existingUser = this.userService.updateUser(id, user);

        return ResponseEntity.ok(existingUser);
    }

    @PatchMapping("users/{id}/role")
    public ResponseEntity<User> updateUserRole(@PathVariable("id") Long id,
            @RequestBody User user) {
        User existingUser = this.userService.updateUserRole(id, user);

        return ResponseEntity.ok(existingUser);
    }

    @DeleteMapping("users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {

        this.userService.deleteUser(id);
        return ResponseEntity.ok("User with ID: " + id + " has been deleted");
    }
}
