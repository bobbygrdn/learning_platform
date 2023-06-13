package com.robertgordon.valoracademy.repository;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.model.User;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testFindByRole() {
        // Arrange
        // Act
        List<User> result = userRepository.findByRole("Admin");
        System.out.println(result);

        // Assert
        assertNotNull(result);
    }
}
