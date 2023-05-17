package com.robertgordon.valoracademy.service;

import java.util.List;

import com.robertgordon.valoracademy.model.Quiz;

public interface QuizService {

    Quiz saveQuiz(Quiz quiz);

    List<Quiz> getAllQuizzes();

    Quiz getQuizById(Long quizId);

    Quiz updateQuiz(Long id, Quiz quiz);

    void deleteQuiz(Long id);
}
