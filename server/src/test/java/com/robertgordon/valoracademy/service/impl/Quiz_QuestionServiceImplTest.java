package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.model.Quiz_Question;
import com.robertgordon.valoracademy.service.Quiz_QuestionService;

@SpringBootTest
public class Quiz_QuestionServiceImplTest {

    @Autowired
    private Quiz_QuestionService quiz_QuestionService;

    @Test
    void testGetAllQuiz_Questions() {
        // Arrange
        // Act
        List<Quiz_Question> result = quiz_QuestionService.getAllQuiz_Questions();

        // Assert
        assertNotNull(result);
    }
}
