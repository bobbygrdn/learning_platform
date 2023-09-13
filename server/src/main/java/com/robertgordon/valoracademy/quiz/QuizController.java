package com.robertgordon.valoracademy.quiz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.lesson.LessonService;
import com.robertgordon.valoracademy.util.UrlPaths;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "https://valor-academy-ui.onrender.com")
@RestController
@RequestMapping(UrlPaths.CLASSURL)
public class QuizController {

    @Autowired
    private QuizService quizService;

    @Autowired
    private LessonService lessonService;

    @PostMapping("lessons/{lessonid}/quizzes")
    public ResponseEntity<Quiz> createQuiz(@PathVariable("lessonid") Long lessonId,
            @RequestBody Quiz quizRequest) {

        this.lessonService.getLessonById(lessonId).getQuizzes().add(quizRequest);

        Quiz quiz = this.quizService.saveQuiz(quizRequest);

        return ResponseEntity.ok(quiz);
    }

    @GetMapping("quizzes")
    public List<Quiz> getAllQuizzes() {
        return this.quizService.getAllQuizzes();
    }

    @GetMapping("quizzes/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable("id") Long quizId) {

        Quiz quiz = this.quizService.getQuizById(quizId);
        return ResponseEntity.ok(quiz);
    }

    @PutMapping("quizzes/{id}")
    public ResponseEntity<Quiz> updateQuiz(@PathVariable("id") Long quizId,
            @RequestBody Quiz quizRequest) {

        Quiz existingQuiz = this.quizService.updateQuiz(quizId, quizRequest);

        return ResponseEntity.ok(existingQuiz);
    }

    @PatchMapping("quizzes/{id}")
    public ResponseEntity<String> updatePublished(@PathVariable("id") long quizId) {
        quizService.updatePublished(quizId);

        return ResponseEntity.ok("Quiz with id " + quizId + " has been updated");
    }

    @PatchMapping("quizzes/{id}/finished")
    public ResponseEntity<String> updateIsUserFinished(@PathVariable("id") long quizId) {

        quizService.updateIsUserFinished(quizId);

        return ResponseEntity.ok("Quiz with id " + quizId + " has been updated");
    }

    @DeleteMapping("quizzes/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable("id") Long quizId) {

        this.quizService.deleteQuiz(quizId);
        return ResponseEntity.ok("Quiz with ID: " + quizId + " has been deleted.");
    }
}
