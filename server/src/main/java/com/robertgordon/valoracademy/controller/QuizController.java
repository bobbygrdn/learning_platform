package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Quiz;
import com.robertgordon.valoracademy.repository.LessonRepository;
import com.robertgordon.valoracademy.repository.QuizRepository;

@RestController
@RequestMapping("/api/v1/")
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private LessonRepository lessonRepository;

    @PostMapping("lessons/{lessonid}/quizzes")
    public ResponseEntity<Quiz> createQuiz(@PathVariable("lessonid") Long lessonId,
            @RequestBody Quiz quizRequest) {
        Quiz quiz = this.lessonRepository.findById(lessonId).map(lesson -> {
            lesson.getQuizzes().add(quizRequest);
            return quizRepository.save(quizRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));

        return ResponseEntity.ok(quiz);
    }

    @GetMapping("quizzes")
    public List<Quiz> getAllQuizzes() {
        return this.quizRepository.findAll();
    }

    @GetMapping("quizzes/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable("id") Long quizId) {
        Quiz quiz = this.quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizId));
        return ResponseEntity.ok(quiz);
    }

    @PutMapping("quizzes/{id}")
    public ResponseEntity<Quiz> updateQuiz(@PathVariable("id") Long quizId,
            @RequestBody Quiz quizRequest) {

        Quiz existingQuiz = this.quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizId));

        existingQuiz.setTitle(quizRequest.getTitle());
        existingQuiz.setDescription(quizRequest.getDescription());

        Quiz updatedQuiz = this.quizRepository.save(existingQuiz);
        return ResponseEntity.ok(updatedQuiz);
    }

    @DeleteMapping("quizzes/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable("id") Long quizId) {
        Quiz quiz = this.quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizId));

        this.quizRepository.delete(quiz);
        return ResponseEntity.ok("Quiz with ID: " + quizId + " has been deleted.");
    }
}
