package com.robertgordon.valoracademy.quiz;

import java.util.List;

public interface QuizService {

    Quiz saveQuiz(Quiz quiz);

    List<Quiz> getAllQuizzes();

    Quiz getQuizById(Long quizId);

    Quiz updateQuiz(Long id, Quiz quiz);

    void deleteQuiz(Long id);

    void updatePublished(long quizId);
}
