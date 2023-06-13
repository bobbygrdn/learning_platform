package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.model.Course;
import com.robertgordon.valoracademy.service.CourseService;

@SpringBootTest
public class CourseServiceImplTest {

    @Autowired
    private CourseService courseService;

    @Test
    void testGetAllCourses() {
        // Arrange
        // Act
        List<Course> result = courseService.getAllCourses();

        // Assert
        assertNotNull(result);
    }
}
