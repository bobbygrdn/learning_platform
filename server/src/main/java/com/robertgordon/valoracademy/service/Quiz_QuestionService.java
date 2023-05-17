package com.robertgordon.valoracademy.service;

import java.util.List;

import com.robertgordon.valoracademy.model.Quiz_Question;

public interface Quiz_QuestionService {

    Quiz_Question saveQuiz_Question(Quiz_Question quiz_Question);

    List<Quiz_Question> getAllQuiz_Questions();

    Quiz_Question getQuiz_QuestionById(Long id);

    Quiz_Question updateQuiz_Question(Long id, Quiz_Question quiz_Question);

    void deleteQuiz_Question(Long id);
}
