package com.robertgordon.valoracademy.service;

import java.util.List;

import com.robertgordon.valoracademy.model.Quiz_Option;

public interface Quiz_OptionService {

    Quiz_Option saveQuiz_Option(Quiz_Option quiz_option);

    List<Quiz_Option> getAllQuiz_Options();

    Quiz_Option getQuiz_OptionById(Long quiz_OptionId);

    Quiz_Option updateQuiz_Option(Long quiz_OptionId, Quiz_Option quiz_option);

    void deleteQuiz_Option(Long quiz_OptionId);
}
