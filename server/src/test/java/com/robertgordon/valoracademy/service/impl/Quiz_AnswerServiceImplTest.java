package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.quiz_answer.Quiz_Answer;
import com.robertgordon.valoracademy.quiz_answer.Quiz_Answer_Service;

@SpringBootTest
public class Quiz_AnswerServiceImplTest {

    @Autowired
    private Quiz_Answer_Service quiz_Answer_Service;

    @Test
    void testGetAllQuiz_Answers() {
        // Arrange
        // Act
        List<Quiz_Answer> result = quiz_Answer_Service.getAllQuiz_Answers();

        // Assert
        assertNotNull(result);
    }
}
