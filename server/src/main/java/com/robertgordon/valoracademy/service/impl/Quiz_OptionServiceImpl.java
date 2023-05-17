package com.robertgordon.valoracademy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Quiz_Option;
import com.robertgordon.valoracademy.repository.Quiz_OptionRepository;
import com.robertgordon.valoracademy.service.Quiz_OptionService;

@Service
public class Quiz_OptionServiceImpl implements Quiz_OptionService {

    @Autowired
    private Quiz_OptionRepository quiz_optionRepository;

    @Override
    public Quiz_Option saveQuiz_Option(Quiz_Option quiz_option) {
        return quiz_optionRepository.save(quiz_option);
    }

    @Override
    public List<Quiz_Option> getAllQuiz_Options() {
        return quiz_optionRepository.findAll();
    }

    @Override
    public Quiz_Option getQuiz_OptionById(Long quiz_OptionId) {
        return quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));
    }

    @Override
    public Quiz_Option updateQuiz_Option(Long quiz_OptionId, Quiz_Option quiz_option) {
        Quiz_Option existingQuiz_Option = quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));

        existingQuiz_Option.setContent(quiz_option.getContent());

        return quiz_optionRepository.save(existingQuiz_Option);
    }

    @Override
    public void deleteQuiz_Option(Long quiz_OptionId) {

        Quiz_Option quiz_option = quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));

        quiz_optionRepository.delete(quiz_option);
    }

}
