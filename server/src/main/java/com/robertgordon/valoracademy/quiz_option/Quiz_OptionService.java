package com.robertgordon.valoracademy.quiz_option;

import java.util.List;

public interface Quiz_OptionService {

    Quiz_Option saveQuiz_Option(Quiz_Option quiz_option);

    List<Quiz_Option> getAllQuiz_Options();

    Quiz_Option getQuiz_OptionById(Long quiz_OptionId);

    Quiz_Option updateQuiz_Option(Long quiz_OptionId, Quiz_Option quiz_option);

    void deleteQuiz_Option(Long quiz_OptionId);
}
