package com.robertgordon.valoracademy.quiz_answer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.quiz_question.Quiz_QuestionService;
import com.robertgordon.valoracademy.util.UrlPaths;

/* `@RestController` is an annotation in Spring that combines `@Controller` and `@ResponseBody`. It is used to indicate that the class is a RESTful web service controller that handles HTTP requests and returns the response in the form of JSON. */
@RestController
/*
 * `@RequestMapping(UrlPaths.CLASSURL)` is setting the base URL path for all the endpoints in this controller to "/api/v1/" from the `UrlPaths class`. This means that all the endpoints in this controller will be accessed through URLs that start with "/api/v1/".
 */
@RequestMapping(UrlPaths.CLASSURL)
public class Quiz_AnswerController {

    /** `@Autowired` is an annotation in Spring that is used to automatically wire
     *  dependencies into a class. In this code, it is being used to inject instances
     *  of `Quiz_Answer_Service` and `Quiz_QuestionService` into the
     *  `Quiz_AnswerController` class. This allows the controller to use the methods
     *  and functionality provided by these services without having to manually 
     * create instances of them. */
    @Autowired
    private Quiz_Answer_Service quiz_answerService;

    @Autowired
    private Quiz_QuestionService quiz_questionService;

    /**
     * This function creates a new quiz answer for a given quiz question ID and saves it to the database.
     * @param quizquestionid The ID of the quiz question to which the answer is being added.
     * @param quiz_answerRequest The request body containing the data for creating a new Quiz_Answer object.
     * @return A ResponseEntity object containing a Quiz_Answer object.
     */
    @PostMapping("/questions/{questionid}/answers")
    public ResponseEntity<Quiz_Answer> createQuiz_Answer(@PathVariable("questionid") Long quizquestionid,
            @RequestBody Quiz_Answer quiz_answerRequest) {

        this.quiz_questionService.getQuiz_QuestionById(quizquestionid).getAnswers().add(quiz_answerRequest);

        Quiz_Answer quiz_answer = this.quiz_answerService.saveQuiz_Answer(quiz_answerRequest);

        return ResponseEntity.ok(quiz_answer);
    }

    /**
     * This Java function returns a list of all quiz answers.
     * 
     * @return A list of Quiz_Answer objects is being returned.
     */
    @GetMapping("answers")
    public List<Quiz_Answer> getAllQuiz_Answers() {
        return this.quiz_answerService.getAllQuiz_Answers();
    }

    /**
     * This method retrieves a Quiz_Answer object by its ID and returns it as a ResponseEntity.
     * @param quiz_AnswerId The parameter "quiz_AnswerId" is a Long variable that represents the unique identifier of a Quiz_Answer object. It is obtained from the path variable in the URL of the GET request for retrieving a Quiz_Answer by its ID.
     * @return A ResponseEntity object containing a Quiz_Answer object with the specified ID.
     */
    @GetMapping("answers/{id}")
    public ResponseEntity<Quiz_Answer> getQuiz_AnswerById(@PathVariable("id") Long quiz_AnswerId) {

        Quiz_Answer quiz_answer = this.quiz_answerService.getQuiz_AnswerById(quiz_AnswerId);
        return ResponseEntity.ok(quiz_answer);
    }

    /**
     * This method updates a quiz answer with the given ID and returns the updated quiz answer.
     * @param quiz_AnswerId The ID of the Quiz_Answer object that needs to be updated. It is obtained from the URL path variable "/answers/{id}" where "{id}" is the ID of the Quiz_Answer object.
     * @param quiz_answer The request body containing the updated Quiz_Answer object.
     * @return A ResponseEntity object containing the updated Quiz_Answer object.
     */
    @PutMapping("/answers/{id}")
    public ResponseEntity<Quiz_Answer> updateQuiz_Answer(@PathVariable("id") Long quiz_AnswerId,
            @RequestBody Quiz_Answer quiz_answer) {

        Quiz_Answer updatedQuiz_Answer = this.quiz_answerService.updateQuiz_Answer(quiz_AnswerId, quiz_answer);

        return ResponseEntity.ok(updatedQuiz_Answer);
    }

    /**
     * This method deletes a quiz answer with a specified ID.
     * @param quiz_AnswerId The parameter quiz_AnswerId is a Long variable that represents the ID of the quiz answer that needs to be deleted. It is obtained from the URL path using the @PathVariable annotation.
     * @return A ResponseEntity object with a status code of 200 (OK) and a message indicating that the Quiz Answer with the specified ID has been deleted.
     */
    @DeleteMapping("/answers/{id}")
    public ResponseEntity<String> deleteQuiz_Answer(@PathVariable("id") Long quiz_AnswerId) {

        this.quiz_answerService.deleteQuiz_Answer(quiz_AnswerId);
        return ResponseEntity.ok("Quiz Answer with ID: " + quiz_AnswerId + " has been deleted");
    }

}
