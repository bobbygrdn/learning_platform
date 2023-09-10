package com.robertgordon.valoracademy.quiz_answer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

/** The `@Service` annotation is used to indicate that a class is a business
 * service layer component. It is used to provide a clear separation between the 
 * business logic and the presentation layer. */
@Service
public class Quiz_AnswerServiceImpl implements Quiz_Answer_Service {

    /** `@Autowired` is injecting an instance of `Quiz_AnswerRepository` into the
     *  `Quiz_AnswerServiceImpl` class, allowing it to access the methods defined in the
     *  `Quiz_AnswerRepository` interface. */
    @Autowired
    private Quiz_AnswerRepository quiz_answerRepository;

    /**
     * This method saves a Quiz_Answer object to the database using the 
     * quiz_answerRepository.
     * @param quiz_answer The parameter "quiz_answer" is an object of type Quiz_Answer 
     * that contains the data to be saved in the database. The method "saveQuiz_Answer"
     *  takes this object as input and saves it in the database using the 
     * "quiz_answerRepository" object. The method returns the saved object of
     * @return The method `saveQuiz_Answer` is returning an object of type 
     * `Quiz_Answer`.
     */
    @Override
    public Quiz_Answer saveQuiz_Answer(Quiz_Answer quiz_answer) {
        return quiz_answerRepository.save(quiz_answer);
    }

    /**
     * This method returns a list of all quiz answers using the findAll() method from 
     * the quiz_answerRepository.
     * 
     * @return A list of all Quiz_Answer objects from the quiz_answerRepository.
     */
    @Override
    public List<Quiz_Answer> getAllQuiz_Answers() {
        return quiz_answerRepository.findAll();
    }

    /**
     * This method retrieves a Quiz_Answer object by its ID from a repository and throws
     *  a ResourceNotFoundException if it does not exist.
     *  @param quiz_AnswerId quiz_AnswerId is a Long type variable that represents the
     *  unique identifier of a Quiz_Answer object. It is used as a parameter in the 
     * getQuiz_AnswerById() method to retrieve a Quiz_Answer object from the database 
     * based on its ID.
     * @return This method returns a Quiz_Answer object with the specified ID. If the 
     * Quiz_Answer with the given ID does not exist, it throws a 
     * ResourceNotFoundException.
     */
    @Override
    public Quiz_Answer getQuiz_AnswerById(Long quiz_AnswerId) {
        return quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));
    }

    /**
     * This method updates an existing quiz answer with new content.
     * @param quiz_AnswerId The ID of the Quiz_Answer that needs to be updated.
     * @param quiz_answer The updated Quiz_Answer object that contains the new content 
     * for the existing Quiz_Answer.
     * @return The method is returning an updated Quiz_Answer object after updating its
     *  content.
     */
    @Override
    public Quiz_Answer updateQuiz_Answer(Long quiz_AnswerId, Quiz_Answer quiz_answer) {
        Quiz_Answer existingQuiz_Answer = quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));

        existingQuiz_Answer.setContent(quiz_answer.getContent());

        return quiz_answerRepository.save(existingQuiz_Answer);
    }

    /**
     * This method deletes a Quiz_Answer object from the repository based on its
     * ID.
     * @param quiz_AnswerId The ID of the Quiz_Answer object that needs to be deleted
     * from the database.
     */
    @Override
    public void deleteQuiz_Answer(Long quiz_AnswerId) {
        Quiz_Answer quiz_answer = quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));

        quiz_answerRepository.delete(quiz_answer);
    }

}
