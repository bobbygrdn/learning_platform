package com.robertgordon.valoracademy.quiz_answer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.quiz_question.Quiz_QuestionService;
import com.robertgordon.valoracademy.util.UrlPaths;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "https://valor-academy-ui.onrender.com")
@RestController
@RequestMapping(UrlPaths.CLASSURL)
public class Quiz_AnswerController {

    @Autowired
    private Quiz_Answer_Service quiz_answerService;

    @Autowired
    private Quiz_QuestionService quiz_questionService;

    @PostMapping("/questions/{questionid}/answers")
    public ResponseEntity<Quiz_Answer> createQuiz_Answer(@PathVariable("questionid") Long quizquestionid,
            @RequestBody Quiz_Answer quiz_answerRequest) {

        this.quiz_questionService.getQuiz_QuestionById(quizquestionid).getAnswers().add(quiz_answerRequest);

        Quiz_Answer quiz_answer = this.quiz_answerService.saveQuiz_Answer(quiz_answerRequest);

        return ResponseEntity.ok(quiz_answer);
    }

    @GetMapping("answers")
    public List<Quiz_Answer> getAllQuiz_Answers() {
        return this.quiz_answerService.getAllQuiz_Answers();
    }

    @GetMapping("answers/{id}")
    public ResponseEntity<Quiz_Answer> getQuiz_AnswerById(@PathVariable("id") Long quiz_AnswerId) {

        Quiz_Answer quiz_answer = this.quiz_answerService.getQuiz_AnswerById(quiz_AnswerId);
        return ResponseEntity.ok(quiz_answer);
    }

    @PutMapping("/answers/{id}")
    public ResponseEntity<Quiz_Answer> updateQuiz_Answer(@PathVariable("id") Long quiz_AnswerId,
            @RequestBody Quiz_Answer quiz_answer) {

        Quiz_Answer updatedQuiz_Answer = this.quiz_answerService.updateQuiz_Answer(quiz_AnswerId, quiz_answer);

        return ResponseEntity.ok(updatedQuiz_Answer);
    }

    @DeleteMapping("/answers/{id}")
    public ResponseEntity<String> deleteQuiz_Answer(@PathVariable("id") Long quiz_AnswerId) {

        this.quiz_answerService.deleteQuiz_Answer(quiz_AnswerId);
        return ResponseEntity.ok("Quiz Answer with ID: " + quiz_AnswerId + " has been deleted");
    }

}
