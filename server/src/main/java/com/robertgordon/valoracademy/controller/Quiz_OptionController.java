package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Quiz_Option;
import com.robertgordon.valoracademy.repository.Quiz_OptionRepository;
import com.robertgordon.valoracademy.repository.Quiz_QuestionRepository;

@RestController
@RequestMapping("/api/v1/")
public class Quiz_OptionController {

    @Autowired
    private Quiz_OptionRepository quiz_optionRepository;

    @Autowired
    private Quiz_QuestionRepository quiz_questionRepository;

    @PostMapping("/questions/{questionid}/options")
    public ResponseEntity<Quiz_Option> createQuiz_Option(@PathVariable("questionid") Long quizquestionid,
            @RequestBody Quiz_Option quiz_optionRequest) {
        Quiz_Option quiz_option = this.quiz_questionRepository.findById(quizquestionid).map(quizquestion -> {
            quizquestion.getOptions().add(quiz_optionRequest);
            return quiz_optionRepository.save(quiz_optionRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizquestionid));

        return ResponseEntity.ok(quiz_option);
    }

    @GetMapping("options")
    public List<Quiz_Option> getAllQuiz_Options() {
        return this.quiz_optionRepository.findAll();
    }

    @GetMapping("options/{id}")
    public ResponseEntity<Quiz_Option> getQuiz_OptionById(@PathVariable("id") Long quiz_OptionId) {
        Quiz_Option quiz_option = this.quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));
        return ResponseEntity.ok(quiz_option);
    }

    @PutMapping("options/{id}")
    public ResponseEntity<Quiz_Option> updateQuiz_Option(@PathVariable("id") Long quiz_OptionId,
            Quiz_Option quiz_option) {
        Quiz_Option existingQuiz_Option = this.quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));

        existingQuiz_Option.setContent(quiz_option.getContent());

        Quiz_Option updatedQuiz_Option = this.quiz_optionRepository.save(existingQuiz_Option);
        return ResponseEntity.ok(updatedQuiz_Option);
    }

    @DeleteMapping("options/{id}")
    public ResponseEntity<String> deleteQuiz_Option(@PathVariable("id") Long quiz_OptionId) {
        Quiz_Option quiz_Option = this.quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));

        this.quiz_optionRepository.delete(quiz_Option);
        return ResponseEntity.ok("Quiz Option with ID: " + quiz_OptionId + " has been deleted");
    }
}
