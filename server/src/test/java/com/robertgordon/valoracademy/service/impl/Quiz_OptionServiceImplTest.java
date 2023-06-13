package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.model.Quiz_Option;
import com.robertgordon.valoracademy.service.Quiz_OptionService;

@SpringBootTest
public class Quiz_OptionServiceImplTest {

    @Autowired
    private Quiz_OptionService quiz_OptionService;

    @Test
    void testGetAllQuiz_Options() {
        // Arrange
        // Act
        List<Quiz_Option> result = quiz_OptionService.getAllQuiz_Options();

        // Assert
        assertNotNull(result);
    }
}
