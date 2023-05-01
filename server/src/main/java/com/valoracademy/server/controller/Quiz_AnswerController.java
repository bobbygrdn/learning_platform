package com.valoracademy.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.valoracademy.server.exception.ResourceNotFoundException;
import com.valoracademy.server.model.Quiz_Answer;
import com.valoracademy.server.model.Quiz_Question;
import com.valoracademy.server.repository.Quiz_AnswerRepository;
import com.valoracademy.server.repository.Quiz_QuestionRepository;

@RestController
@RequestMapping("/api/v1/")
public class Quiz_AnswerController {

    @Autowired
    private Quiz_AnswerRepository quiz_answerRepository;

    @Autowired
    private Quiz_QuestionRepository quiz_questionRepository;

    @PostMapping("/quizzes/{quizid}/answers")
    public ResponseEntity<Quiz_Answer> createQuiz_Answer(@PathVariable("quizquestionid") Long quizquestionid,
            @RequestBody Quiz_Answer quiz_answerRequest) {
        Quiz_Question quiz_question = this.quiz_questionRepository.findById(quizquestionid).orElseThrow(
                () -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizquestionid));
        quiz_answerRequest.setQuestion(quiz_question);
        Quiz_Answer quiz_answer = this.quiz_answerRepository.save(quiz_answerRequest);

        return ResponseEntity.ok(quiz_answer);
    }

    @GetMapping("answers")
    public List<Quiz_Answer> getAllQuiz_Answers() {
        return this.quiz_answerRepository.findAll();
    }

    @GetMapping("answers/{id}")
    public ResponseEntity<Quiz_Answer> getQuiz_AnswerById(@PathVariable("id") Long quiz_AnswerId) {
        Quiz_Answer quiz_answer = this.quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));
        return ResponseEntity.ok(quiz_answer);
    }

    @PutMapping("/answers/{id}")
    public ResponseEntity<Quiz_Answer> updateQuiz_Answer(@PathVariable("id") Long quiz_AnswerId,
            @RequestBody Quiz_Answer quiz_answer) {
        Quiz_Answer existingQuiz_Answer = this.quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));

        existingQuiz_Answer.setContent(quiz_answer.getContent());
        Quiz_Answer updatedQuiz_Answer = this.quiz_answerRepository.save(existingQuiz_Answer);

        return ResponseEntity.ok(updatedQuiz_Answer);
    }

    @DeleteMapping("/answers/{id}")
    public ResponseEntity<String> deleteQuiz_Answer(@PathVariable("id") Long quiz_AnswerId) {
        Quiz_Answer quiz_answer = this.quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));

        this.quiz_answerRepository.delete(quiz_answer);
        return ResponseEntity.ok("Quiz Answer with ID: " + quiz_AnswerId + " has been deleted");
    }

}
