package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.model.Quiz_Option;
import com.robertgordon.valoracademy.service.Quiz_OptionService;
import com.robertgordon.valoracademy.service.Quiz_QuestionService;

@RestController
@RequestMapping("/api/v1/")
public class Quiz_OptionController {

    @Autowired
    private Quiz_OptionService quiz_optionService;

    @Autowired
    private Quiz_QuestionService quiz_questionService;

    @PostMapping("questions/{questionid}/options")
    public ResponseEntity<Quiz_Option> createQuiz_Option(@PathVariable("questionid") Long quizquestionid,
            @RequestBody Quiz_Option quiz_optionRequest) {

        this.quiz_questionService.getQuiz_QuestionById(quizquestionid).getOptions().add(quiz_optionRequest);

        Quiz_Option quiz_option = this.quiz_optionService.saveQuiz_Option(quiz_optionRequest);

        return ResponseEntity.ok(quiz_option);
    }

    @GetMapping("options")
    public List<Quiz_Option> getAllQuiz_Options() {
        return this.quiz_optionService.getAllQuiz_Options();
    }

    @GetMapping("options/{id}")
    public ResponseEntity<Quiz_Option> getQuiz_OptionById(@PathVariable("id") Long quiz_OptionId) {

        Quiz_Option quiz_option = this.quiz_optionService.getQuiz_OptionById(quiz_OptionId);
        return ResponseEntity.ok(quiz_option);
    }

    @PutMapping("options/{id}")
    public ResponseEntity<Quiz_Option> updateQuiz_Option(@PathVariable("id") Long quiz_OptionId,
            @RequestBody Quiz_Option quiz_option) {

        Quiz_Option existingQuiz_Option = this.quiz_optionService.updateQuiz_Option(quiz_OptionId, quiz_option);

        return ResponseEntity.ok(existingQuiz_Option);
    }

    @DeleteMapping("options/{id}")
    public ResponseEntity<String> deleteQuiz_Option(@PathVariable("id") Long quiz_OptionId) {

        this.quiz_optionService.deleteQuiz_Option(quiz_OptionId);
        return ResponseEntity.ok("Quiz Option with ID: " + quiz_OptionId + " has been deleted");
    }
}
