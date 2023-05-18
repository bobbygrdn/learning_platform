package com.robertgordon.valoracademy.service;

import java.util.List;

import com.robertgordon.valoracademy.model.Quiz_Answer;

public interface Quiz_Answer_Service {

    Quiz_Answer saveQuiz_Answer(Quiz_Answer quiz_answer);

    List<Quiz_Answer> getAllQuiz_Answers();

    Quiz_Answer getQuiz_AnswerById(Long quiz_AnswerId);

    Quiz_Answer updateQuiz_Answer(Long quiz_AnswerId, Quiz_Answer quiz_answer);

    void deleteQuiz_Answer(Long quiz_AnswerId);
}
