package com.robertgordon.valoracademy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Quiz_Option;
import com.robertgordon.valoracademy.repository.Quiz_OptionRepository;
import com.robertgordon.valoracademy.service.Quiz_OptionService;

/** The `@Service` annotation is used to indicate that a class is a business
 * service layer component. It is used to provide a clear separation between the 
 * business logic and the presentation layer. */
@Service
public class Quiz_OptionServiceImpl implements Quiz_OptionService {

    /** `@Autowired` is injecting an instance of `Quiz_OptionRepository` into the
     *  `Quiz_OptionServiceImpl` class, allowing it to access the methods defined in the
     *  `Quiz_OptionRepository` interface. */
    @Autowired
    private Quiz_OptionRepository quiz_optionRepository;

   /**
    * This method saves a Quiz_Option object to the database using a repository.
    * @param quiz_option The parameter "quiz_option" is an object of type Quiz_Option
    * that is being passed as an argument to the method "saveQuiz_Option". This object
    * contains data related to a quiz option, such as the option text, whether it is 
    * correct or not, and the question it belongs to.
    * @return The method `saveQuiz_Option` is returning an object of type `Quiz_Option`.
    */
    @Override
    public Quiz_Option saveQuiz_Option(Quiz_Option quiz_option) {
        return quiz_optionRepository.save(quiz_option);
    }

    /**
     * This method returns a list of all quiz options using the findAll() method from
     *  the quiz_optionRepository.
     * @return A list of Quiz_Option objects is being returned. The list is obtained by
     * calling the `findAll()` method on the `quiz_optionRepository`.
     */
    @Override
    public List<Quiz_Option> getAllQuiz_Options() {
        return quiz_optionRepository.findAll();
    }

    /**
     * This method retrieves a Quiz_Option object by its ID from a repository and
     * throws a ResourceNotFoundException if it does not exist.
     * @param quiz_OptionId The ID of the Quiz_Option that needs to be retrieved 
     * from the database.
     * @return The method is returning a Quiz_Option object with the specified ID. 
     * If the object does not exist, it throws a ResourceNotFoundException with an 
     * error message.
     */
    @Override
    public Quiz_Option getQuiz_OptionById(Long quiz_OptionId) {
        return quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));
    }

    /**
     * This method updates an existing quiz option with new content.
     * @param quiz_OptionId The ID of the Quiz_Option that needs to be updated.
     * @param quiz_option The quiz_option parameter is an object of the Quiz_Option
     *  class, which contains the updated content for the existing quiz option.
     * @return The method is returning an updated Quiz_Option object.
     */
    @Override
    public Quiz_Option updateQuiz_Option(Long quiz_OptionId, Quiz_Option quiz_option) {
        Quiz_Option existingQuiz_Option = quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));

        existingQuiz_Option.setContent(quiz_option.getContent());

        return quiz_optionRepository.save(existingQuiz_Option);
    }

    /**
     * This method deletes a quiz option by its ID.
     * 
     * @param quiz_OptionId The ID of the Quiz_Option that needs to be deleted.
     */
    @Override
    public void deleteQuiz_Option(Long quiz_OptionId) {

        Quiz_Option quiz_option = quiz_optionRepository.findById(quiz_OptionId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Option does not exist with the ID: " + quiz_OptionId));

        quiz_optionRepository.delete(quiz_option);
    }

}
