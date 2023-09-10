package com.robertgordon.valoracademy.repository;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.user.User;
import com.robertgordon.valoracademy.user.UserRepository;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

     @Test
    void testFindByUsername() {
        // Arrange
        // Act
        User result = userRepository.findByUsername("Charles");
        // Assert
        assertNotNull(result);
    }

}
