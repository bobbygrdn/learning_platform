package com.robertgordon.valoracademy.quiz_option;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.quiz_question.Quiz_QuestionService;

/** `@RestController` is an annotation in Spring that combines `@Controller` and 
 * `@ResponseBody`. It is used to indicate that the class is a RESTful web service
 *  controller that handles HTTP requests and returns the response in the form of JSON. */
@RestController
/*
 * `@RequestMapping("/api/v1/")` is setting the base URL path for all the
 * endpoints in this controller
 * to "/api/v1/". This means that all the endpoints in this controller will be
 * accessed through URLs
 * that start with "/api/v1/".
 */
@RequestMapping("/api/v1/")
public class Quiz_OptionController {

    /** These lines are using Spring's dependency injection to inject instances of 
     * `Quiz_OptionService` and `Quiz_QuestionService` into the `Quiz_OptionController`
     *  class. This allows the controller to use the methods and functionality provided 
     * by these services without having to create new instances of them manually. */
    @Autowired
    private Quiz_OptionService quiz_optionService;

    @Autowired
    private Quiz_QuestionService quiz_questionService;

    /**
     * This method creates a new quiz option for a given quiz question ID and returns the created quiz option.
     * @param quizquestionid The ID of the quiz question to which the quiz option will be added.
     * @param quiz_optionRequest The request body containing the data for creating a new Quiz_Option object.
     * @return A ResponseEntity object containing a Quiz_Option object.
     */
    @PostMapping("questions/{questionid}/options")
    public ResponseEntity<Quiz_Option> createQuiz_Option(@PathVariable("questionid") Long quizquestionid,
            @RequestBody Quiz_Option quiz_optionRequest) {

        this.quiz_questionService.getQuiz_QuestionById(quizquestionid).getOptions().add(quiz_optionRequest);

        Quiz_Option quiz_option = this.quiz_optionService.saveQuiz_Option(quiz_optionRequest);

        return ResponseEntity.ok(quiz_option);
    }

    /**
     * This method returns a list of all quiz options.
     * 
     * @return A list of Quiz_Option objects is being returned.
     */
    @GetMapping("options")
    public List<Quiz_Option> getAllQuiz_Options() {
        return this.quiz_optionService.getAllQuiz_Options();
    }

    /**
     * This method retrieves a quiz option by its ID and returns it as a ResponseEntity.
     * @param quiz_OptionId The path variable "id" which is a Long data type representing the ID of a Quiz_Option object.
     * @return A ResponseEntity object containing a Quiz_Option object with the specified ID.
     */
    @GetMapping("options/{id}")
    public ResponseEntity<Quiz_Option> getQuiz_OptionById(@PathVariable("id") Long quiz_OptionId) {

        Quiz_Option quiz_option = this.quiz_optionService.getQuiz_OptionById(quiz_OptionId);
        return ResponseEntity.ok(quiz_option);
    }

   /**
    * This method updates a quiz option with the given ID and returns the updated option.
    * @param quiz_OptionId A Long variable representing the ID of the quiz option that needs to be updated.
    * @param quiz_option The request body containing the updated information for the Quiz_Option object.
    * @return A ResponseEntity object containing the updated Quiz_Option object.
    */
    @PutMapping("options/{id}")
    public ResponseEntity<Quiz_Option> updateQuiz_Option(@PathVariable("id") Long quiz_OptionId,
            @RequestBody Quiz_Option quiz_option) {

        Quiz_Option existingQuiz_Option = this.quiz_optionService.updateQuiz_Option(quiz_OptionId, quiz_option);

        return ResponseEntity.ok(existingQuiz_Option);
    }

    /**
     * This method deletes a quiz option with a specified ID and returns a success message.
     * @param quiz_OptionId The quiz_OptionId is a Long type variable that represents the unique identifier of a quiz option that needs to be deleted. It is obtained from the path variable in the URL of the DELETE request.
     * @return A ResponseEntity object with a String message indicating that a Quiz Option with the specified ID has been deleted.
     */
    @DeleteMapping("options/{id}")
    public ResponseEntity<String> deleteQuiz_Option(@PathVariable("id") Long quiz_OptionId) {

        this.quiz_optionService.deleteQuiz_Option(quiz_OptionId);
        return ResponseEntity.ok("Quiz Option with ID: " + quiz_OptionId + " has been deleted");
    }
}
