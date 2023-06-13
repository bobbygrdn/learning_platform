package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.model.User;
import com.robertgordon.valoracademy.service.UserService;

@SpringBootTest
public class UserServiceImplTest {

    @Autowired
    private UserService userService;

    @Test
    void testGetAllUsers() {
        // Arrange
        // Act
        List<User> result = userService.getAllUsers();

        // Assert
        assertNotNull(result);
    }

    @ParameterizedTest
    @CsvSource(value = {
            "testUser4",
            "testUser5",
            "testUser6"
    })
    void testSaveUser(String username) {
        // Arrange
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword("password");
        newUser.setEmail(username + "@email.com");
        newUser.setRole("User");

        // Act
        userService.saveUser(newUser);
        User result = userService.getUserById(newUser.getId());

        // Assert
        assertNotNull(result);

        // Cleanup
        userService.deleteUser(newUser.getId());
    }
}
