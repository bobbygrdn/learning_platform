package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Quiz_Question;
import com.robertgordon.valoracademy.repository.QuizRepository;
import com.robertgordon.valoracademy.repository.Quiz_QuestionRepository;

@RestController
@RequestMapping("/api/v1/")
public class Quiz_QuestionController {

    @Autowired
    private Quiz_QuestionRepository quiz_questionRepository;

    @Autowired
    private QuizRepository quizRepository;

    @PostMapping("/quizzes/{quizid}/questions")
    public ResponseEntity<Quiz_Question> createQuiz_Question(@PathVariable("quizid") Long quizId,
            @RequestBody Quiz_Question quiz_questionRequest) {
        Quiz_Question quiz_question = this.quizRepository.findById(quizId).map(quiz -> {
            quiz.getQuestions().add(quiz_questionRequest);
            return quiz_questionRepository.save(quiz_questionRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizId));

        return ResponseEntity.ok(quiz_question);
    }

    @GetMapping("questions")
    public List<Quiz_Question> getAllQuiz_Questions() {
        return this.quiz_questionRepository.findAll();
    }

    @GetMapping("questions/{id}")
    public ResponseEntity<Quiz_Question> getQuiz_QuestionById(@PathVariable("id") Long quiz_questionId) {
        Quiz_Question quiz_question = this.quiz_questionRepository.findById(quiz_questionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Question does not exist with the ID: " + quiz_questionId));
        return ResponseEntity.ok(quiz_question);
    }

    @PutMapping("questions/{id}")
    public ResponseEntity<Quiz_Question> updateQuiz_Question(@PathVariable("id") Long quiz_questionId,
            Quiz_Question quiz_question) {

        Quiz_Question existingQuiz_Question = this.quiz_questionRepository.findById(quiz_questionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Question does not exist with the ID: " + quiz_questionId));

        existingQuiz_Question.setTitle(quiz_question.getTitle());
        existingQuiz_Question.setContent(quiz_question.getContent());

        Quiz_Question updatedQuiz_Question = this.quiz_questionRepository.save(existingQuiz_Question);
        return ResponseEntity.ok(updatedQuiz_Question);
    }

    @DeleteMapping("questions/{id}")
    public ResponseEntity<String> deleteQuiz_Question(@PathVariable("id") Long quiz_questionId) {
        Quiz_Question quiz_question = this.quiz_questionRepository.findById(quiz_questionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Question does not exist with the ID: " + quiz_questionId));

        this.quiz_questionRepository.delete(quiz_question);
        return ResponseEntity.ok("Quiz Question with ID: " + quiz_questionId + " has been deleted");
    }
}
