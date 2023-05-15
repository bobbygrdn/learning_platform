package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Quiz_Answer;
import com.robertgordon.valoracademy.repository.Quiz_AnswerRepository;
import com.robertgordon.valoracademy.repository.Quiz_QuestionRepository;

@RestController
@RequestMapping("/api/v1/")
public class Quiz_AnswerController {

    // TODO: refactor this to implement the QuizAnswerService interface
    @Autowired
    private Quiz_AnswerRepository quiz_answerRepository;

    @Autowired
    private Quiz_QuestionRepository quiz_questionRepository;

    @PostMapping("/questions/{questionid}/answers")
    public ResponseEntity<Quiz_Answer> createQuiz_Answer(@PathVariable("questionid") Long quizquestionid,
            @RequestBody Quiz_Answer quiz_answerRequest) {
        Quiz_Answer quiz_answer = this.quiz_questionRepository.findById(quizquestionid).map(quizquestion -> {
            quizquestion.getAnswers().add(quiz_answerRequest);
            return quiz_answerRepository.save(quiz_answerRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizquestionid));

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
