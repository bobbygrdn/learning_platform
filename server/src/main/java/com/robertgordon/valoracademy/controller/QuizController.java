package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.model.Quiz;
import com.robertgordon.valoracademy.service.LessonService;
import com.robertgordon.valoracademy.service.QuizService;

/** `@RestController` is an annotation in Spring that combines `@Controller` and 
 *  `@ResponseBody`. It is used to indicate that the class is a RESTful web service
 *  controller that handles HTTP requests and returns the response in the form of JSON. */
@RestController
/*
 * `@RequestMapping("/api/v1/")` is setting the base URL path for all the endpoints in this controller to "/api/v1/". This means that all the endpoints in this controller will be accessed through URLs that start with "/api/v1/".
 */
@RequestMapping("/api/v1/")
public class QuizController {

   /** @Autowired is used to inject instances of `QuizService` and `LessonService`
    *  into the `QuizController` class. This allows
    *  the controller to use the methods and functionality provided by these services
    * without having to create new instances of them manually. */
    @Autowired
    private QuizService quizService;

    @Autowired
    private LessonService lessonService;

    /**
     * This method creates a new quiz and adds it to a lesson with a given ID.
     * @param lessonId A Long value representing the ID of the lesson to which the quiz belongs.
     * @param quizRequest The request body containing the details of the quiz to be created.
     * @return A ResponseEntity object containing the saved Quiz object.
     */
    @PostMapping("lessons/{lessonid}/quizzes")
    public ResponseEntity<Quiz> createQuiz(@PathVariable("lessonid") Long lessonId,
            @RequestBody Quiz quizRequest) {

        this.lessonService.getLessonById(lessonId).getQuizzes().add(quizRequest);

        Quiz quiz = this.quizService.saveQuiz(quizRequest);

        return ResponseEntity.ok(quiz);
    }

    /**
     * This method returns a list of all quizzes.
     * 
     * @return A list of Quiz objects is being returned.
     */
    @GetMapping("quizzes")
    public List<Quiz> getAllQuizzes() {
        return this.quizService.getAllQuizzes();
    }

    /**
     * This method retrieves a quiz by its ID and returns it as a ResponseEntity.
     * @param quizId quizId is a Long type variable that represents the unique identifier of a quiz. It is obtained from the path variable in the URL of the GET request for retrieving a quiz by its ID.
     * @return A ResponseEntity object containing a Quiz object with the specified quizId.
     */
    @GetMapping("quizzes/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable("id") Long quizId) {

        Quiz quiz = this.quizService.getQuizById(quizId);
        return ResponseEntity.ok(quiz);
    }

    /**
     * This method updates a quiz with the given ID and returns the updated quiz.
     * @param quizId The ID of the quiz that needs to be updated. It is obtained from the path variable "{id}" in the endpoint URL.
     * @param quizRequest The request body containing the updated information for the quiz being updated.
     * @return A ResponseEntity object containing the updated Quiz object.
     */
    @PutMapping("quizzes/{id}")
    public ResponseEntity<Quiz> updateQuiz(@PathVariable("id") Long quizId,
            @RequestBody Quiz quizRequest) {

        Quiz existingQuiz = this.quizService.updateQuiz(quizId, quizRequest);

        return ResponseEntity.ok(existingQuiz);
    }

   /**
    * This method deletes a quiz with a specified ID and returns a success message.
    * @param quizId The ID of the quiz that needs to be deleted. It is obtained from the path variable "{id}" in the URL of the DELETE request.
    * @return A ResponseEntity object with a String message indicating that the quiz with the specified ID has been deleted.
    */
    @DeleteMapping("quizzes/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable("id") Long quizId) {

        this.quizService.deleteQuiz(quizId);
        return ResponseEntity.ok("Quiz with ID: " + quizId + " has been deleted.");
    }
}
