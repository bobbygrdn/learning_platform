package com.robertgordon.valoracademy.quiz_question;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

/**
 * The `@Service` annotation is used to indicate that a class is a business
 * service layer component. It is used to provide a clear separation between the
 * business logic and the presentation layer.
 */
@Service
public class Quiz_QuestionServiceImpl implements Quiz_QuestionService {

    /**
     * `@Autowired` is injecting an instance of `Quiz_QuestionRepository` into the
     * `Quiz_QuestionServiceImpl` class, allowing it to access the methods defined
     * in the
     * `Quiz_QuestionRepository` interface.
     */
    @Autowired
    private Quiz_QuestionRepository quiz_QuestionRepository;

    /**
     * This method saves a Quiz_Question object to the database using the
     * Quiz_QuestionRepository.
     * 
     * @param quiz_Question quiz_Question is an object of type Quiz_Question that
     *                      contains the data for a quiz question. This method saves
     *                      the quiz question to
     *                      the database using the quiz_QuestionRepository.
     *                      The @Override annotation
     *                      indicates that this method is overriding a method in a
     *                      superclass or interface.
     * @return The method `saveQuiz_Question` is returning an object of type
     *         `Quiz_Question`. This object is obtained by calling the `save` method
     *         on the
     *         `quiz_QuestionRepository` object with the `quiz_Question` parameter
     *         passed to
     *         the method.
     */
    @Override
    public Quiz_Question saveQuiz_Question(Quiz_Question quiz_Question) {
        return quiz_QuestionRepository.save(quiz_Question);
    }

    /**
     * This method returns a list of all quiz questions from the
     * quiz_QuestionRepository.
     * 
     * @return A list of Quiz_Question objects is being returned.
     */
    @Override
    public List<Quiz_Question> getAllQuiz_Questions() {
        return quiz_QuestionRepository.findAll();
    }

    /**
     * This method retrieves a Quiz_Question object by its ID from a repository and
     * throws a ResourceNotFoundException if it does not exist.
     * 
     * @param id The parameter "id" is a Long data type representing the unique
     *           identifier of a Quiz_Question object that needs to be retrieved
     *           from the
     *           database.
     * @return The method is returning a Quiz_Question object with the specified ID.
     *         If the object does not exist, it throws a ResourceNotFoundException.
     */
    @Override
    public Quiz_Question getQuiz_QuestionById(Long id) {
        return quiz_QuestionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz_Question does not exist with the ID: " + id));
    }

    /**
     * This method updates an existing quiz question with new title and content.
     * 
     * @param id            The ID of the Quiz_Question that needs to be updated.
     * @param quiz_Question The parameter `quiz_Question` is an object of type
     *                      `Quiz_Question` which contains the updated information
     *                      for a quiz question.
     * @return The method is returning an updated Quiz_Question object after
     *         updating
     *         its title and content.
     */
    @Override
    public Quiz_Question updateQuiz_Question(Long id, Quiz_Question quiz_Question) {
        Quiz_Question existingQuiz_Question = quiz_QuestionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz_Question does not exist with the ID: " + id));

        existingQuiz_Question.setTitle(quiz_Question.getTitle());
        existingQuiz_Question.setContent(quiz_Question.getContent());

        return quiz_QuestionRepository.save(existingQuiz_Question);
    }

    /**
     * This method deletes a quiz question by its ID.
     * 
     * @param id The parameter "id" is a Long data type representing the unique
     *           identifier of a Quiz_Question object that needs to be deleted from
     *           the database.
     */
    @Override
    public void deleteQuiz_Question(Long id) {
        Quiz_Question quiz_Question = quiz_QuestionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz_Question does not exist with the ID: " + id));

        quiz_QuestionRepository.delete(quiz_Question);
    }

    /**
     * This method updates the published status of a quiz question in a Java
     * application.
     * 
     * @param questionId The ID of the Quiz_Question object that needs to be
     *                   updated.
     */
    @Override
    public void updatePublished(long questionId) {

        Quiz_Question existingQuestion = quiz_QuestionRepository.findById(questionId)
                .orElseThrow(() -> new ResourceNotFoundException("Question does not exist with ID: " + questionId));

        existingQuestion.setPublished(!existingQuestion.isPublished());

        quiz_QuestionRepository.save(existingQuestion);
    }

    /**
     * The method updates the "isUserFinished" field of a Quiz_Question object to
     * true.
     * 
     * @param questionId The questionId parameter is the unique identifier of the
     *                   question that needs
     *                   to be updated.
     */
    @Override
    public void updateIsUserFinished(long questionId) {

        Quiz_Question existingQuestion = quiz_QuestionRepository.findById(questionId)
                .orElseThrow(() -> new ResourceNotFoundException("Question does not exist with ID: " + questionId));

        existingQuestion.setUserFinished(true);

        quiz_QuestionRepository.save(existingQuestion);
    }

}
