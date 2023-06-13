package com.robertgordon.valoracademy.repository;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.model.Course;

@SpringBootTest
public class CourseRepositoryTest {

    @Autowired
    private CourseRepository courseRepository;

    @Test
    void testFindByDifficulty() {
        // Arrange
        // Act
        List<Course> result = courseRepository.findByDifficulty("Beginner");

        // Assert
        assertNotNull(result);
    }

    @Test
    void testFindyByTimeToComplete() {
        // Arrange
        // Act
        List<Course> result = courseRepository.findByTimeToComplete("1 day");

        // Assert
        assertNotNull(result);
    }
}
