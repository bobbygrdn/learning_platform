package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.lesson.Lesson;
import com.robertgordon.valoracademy.lesson.LessonService;

@SpringBootTest
public class LessonServiceImplTest {

    @Autowired
    private LessonService lessonService;

    @Test
    void testGetAllLessons() {
        // Arrange
        // Act
        List<Lesson> result = lessonService.getAllLessons();

        // Assert
        assertNotNull(result);
    }
}
