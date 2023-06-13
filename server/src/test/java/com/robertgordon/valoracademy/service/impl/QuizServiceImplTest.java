package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.model.Quiz;
import com.robertgordon.valoracademy.service.QuizService;

@SpringBootTest
public class QuizServiceImplTest {

    @Autowired
    private QuizService quizService;

    @Test
    void testGetAllQuizzes() {
        // Arrange
        // Act
        List<Quiz> result = quizService.getAllQuizzes();

        // Assert
        assertNotNull(result);

    }
}
