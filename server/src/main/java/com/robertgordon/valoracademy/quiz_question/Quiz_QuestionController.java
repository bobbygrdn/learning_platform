package com.robertgordon.valoracademy.quiz_question;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.quiz.QuizService;
import com.robertgordon.valoracademy.util.UrlPaths;

/**
 * `@RestController` is an annotation in Spring that combines `@Controller` and
 * `@ResponseBody`. It is used to indicate that the class is a RESTful web
 * service
 * controller that handles HTTP requests and returns the response in the form of
 * JSON.
 */
@RestController
/*
 * `@RequestMapping(UrlPaths.CLASSURL)` is setting the base URL path for all the
 * endpoints in this controller to "/api/v1/" from the `UrlPaths class`. This
 * means that all the endpoints in this controller will be accessed through URLs
 * that start with "/api/v1/".
 */
@RequestMapping(UrlPaths.CLASSURL)
public class Quiz_QuestionController {

    /**
     * `@Autowired` is an annotation in Spring that allows automatic dependency
     * injection. In this code, it is used to inject instances of
     * Quiz_QuestionService`
     * and `QuizService` into the `Quiz_QuestionController` class. This means that
     * the controller can use the methods and properties of these services without
     * having to create new instances of them.
     */
    @Autowired
    private Quiz_QuestionService quiz_questionService;

    @Autowired
    private QuizService quizService;

    /**
     * This method creates a new quiz question and adds it to an existing quiz.
     * 
     * @param quizId               The ID of the quiz to which the question is being
     *                             added.
     * @param quiz_questionRequest The request body containing the details of the
     *                             Quiz_Question object to be created.
     * @return A ResponseEntity object containing a Quiz_Question object is being
     *         returned.
     */
    @PostMapping("/quizzes/{quizid}/questions")
    public ResponseEntity<Quiz_Question> createQuiz_Question(@PathVariable("quizid") Long quizId,
            @RequestBody Quiz_Question quiz_questionRequest) {

        this.quizService.getQuizById(quizId).getQuestions().add(quiz_questionRequest);

        Quiz_Question quiz_question = this.quiz_questionService.saveQuiz_Question(quiz_questionRequest);

        return ResponseEntity.ok(quiz_question);
    }

    /**
     * This method returns a list of all quiz questions.
     * 
     * @return A list of Quiz_Question objects is being returned.
     */
    @GetMapping("questions")
    public List<Quiz_Question> getAllQuiz_Questions() {
        return this.quiz_questionService.getAllQuiz_Questions();
    }

    /**
     * This method retrieves a quiz question by its ID and returns it as a
     * ResponseEntity.
     * 
     * @param quiz_questionId The parameter "quiz_questionId" is a Long variable
     *                        that
     *                        represents the ID of a quiz question. It is annotated
     *                        with @PathVariable, which
     *                        means that its value is extracted from the URL path of
     *                        the HTTP request. This
     *                        method returns a ResponseEntity object that contains
     *                        the Quiz_Question object
     *                        with the specified ID
     * @return A ResponseEntity object containing a Quiz_Question object with the
     *         specified
     *         quiz_questionId.
     */
    @GetMapping("questions/{id}")
    public ResponseEntity<Quiz_Question> getQuiz_QuestionById(@PathVariable("id") Long quiz_questionId) {

        Quiz_Question quiz_question = this.quiz_questionService.getQuiz_QuestionById(quiz_questionId);

        return ResponseEntity.ok(quiz_question);
    }

    /**
     * This method updates a quiz question with the given ID and returns the updated
     * question.
     * 
     * @param quiz_questionId The ID of the quiz question that needs to be updated.
     * @param quiz_question   The updated Quiz_Question object that will replace the
     *                        existing Quiz_Question object with the specified
     *                        quiz_questionId.
     * @return A ResponseEntity object containing the updated Quiz_Question object.
     */
    @PutMapping("questions/{id}")
    public ResponseEntity<Quiz_Question> updateQuiz_Question(@PathVariable("id") Long quiz_questionId,
            @RequestBody Quiz_Question quiz_question) {

        Quiz_Question existingQuiz_Question = this.quiz_questionService.updateQuiz_Question(quiz_questionId,
                quiz_question);
        return ResponseEntity.ok(existingQuiz_Question);
    }

    /**
     * This method updates the published status of a quiz question with a given ID.
     * 
     * @param questionId A long integer representing the ID of the question that
     *                   needs to be updated.
     * @return A ResponseEntity object with a status code of 200 (OK) and a message
     *         indicating that the
     *         question with the specified ID has been updated.
     */
    @PatchMapping("questions/{id}")
    public ResponseEntity<String> updatePublished(@PathVariable("id") long questionId) {

        quiz_questionService.updatePublished(questionId);

        return ResponseEntity.ok("Question with id " + questionId + " has been updated");
    }

    /**
     * This method updates the "isUserFinished" status of a question with the given
     * ID and returns a
     * response entity with a success message.
     * 
     * @param questionId The questionId is a long value that represents the unique
     *                   identifier of a
     *                   question. It is used to identify the specific question that
     *                   needs to be updated as finished.
     * @return The method is returning a ResponseEntity object with a String
     *         message.
     */
    @PatchMapping("questions/{id}/finished")
    public ResponseEntity<String> updateIsUserFinished(@PathVariable("id") long questionId) {

        quiz_questionService.updateIsUserFinished(questionId);

        return ResponseEntity.ok("Question with id " + questionId + " has been finished");
    }

    /**
     * This method deletes a quiz question with a specified ID and returns a success
     * message.
     * 
     * @param quiz_questionId The ID of the quiz question that needs to be deleted.
     * @return A ResponseEntity object with a status code of 200 (OK) and a message
     *         indicating that the quiz question with the specified ID has been
     *         deleted.
     */
    @DeleteMapping("questions/{id}")
    public ResponseEntity<String> deleteQuiz_Question(@PathVariable("id") Long quiz_questionId) {

        this.quiz_questionService.deleteQuiz_Question(quiz_questionId);
        return ResponseEntity.ok("Quiz Question with ID: " + quiz_questionId + " has been deleted");
    }
}
