package com.robertgordon.valoracademy.quiz;

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
public class QuizServiceImpl implements QuizService {

    /**
     * `@Autowired` is injecting an instance of `QuizRepository` into the
     * `QuizServiceImpl` class, allowing it to access the methods defined in the
     * `QuizRepository` interface.
     */
    @Autowired
    private QuizRepository quizRepository;

    /**
     * This method saves a quiz object to the quiz repository.
     * 
     * @param quiz The parameter "quiz" is an object of the class Quiz that contains
     *             information about a quiz. This method saves the quiz object to
     *             the database
     *             using the quizRepository. The @Override annotation indicates that
     *             this method
     *             overrides a method in a superclass or interface.
     * @return The method `saveQuiz` returns an object of type `Quiz`.
     */
    @Override
    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    /**
     * This method returns a list of all quizzes from the quiz repository.
     * 
     * @return A list of all quizzes from the quiz repository.
     */
    @Override
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    /**
     * This method retrieves a quiz by its ID from a repository and throws an
     * exception if it does not exist.
     * 
     * @param quizId quizId is a Long type parameter representing the unique
     *               identifier of a quiz that needs to be retrieved from the
     *               database.
     * @return The method is returning a Quiz object with the specified quizId. If
     *         the quiz with the given quizId does not exist, it throws a
     *         ResourceNotFoundException.
     */
    @Override
    public Quiz getQuizById(Long quizId) {
        return quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizId));
    }

    /**
     * This method updates an existing quiz with new title and description values.
     * 
     * @param id   The ID of the quiz that needs to be updated.
     * @param quiz The "quiz" parameter is an instance of the Quiz class that
     *             contains the updated information for an existing quiz. It is used
     *             to update
     *             the title and description of the existing quiz.
     * @return The method is returning an updated Quiz object after modifying its
     *         title and description.
     */
    @Override
    public Quiz updateQuiz(Long id, Quiz quiz) {
        Quiz existingQuiz = quizRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + id));

        existingQuiz.setTitle(quiz.getTitle());
        existingQuiz.setDescription(quiz.getDescription());

        return quizRepository.save(existingQuiz);
    }

    /**
     * This method deletes a quiz with a given ID from a repository, throwing an
     * exception if the quiz does not exist.
     * 
     * @param id The ID of the quiz that needs to be deleted.
     */
    @Override
    public void deleteQuiz(Long id) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + id));

        quizRepository.delete(quiz);
    }

    /**
     * This method updates the published status of a quiz by toggling its current
     * value.
     * 
     * @param quizId The ID of the quiz that needs to be updated.
     */
    @Override
    public void updatePublished(long quizId) {

        Quiz existingQuiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with ID: " + quizId));

        existingQuiz.setPublished(!existingQuiz.isPublished());

        quizRepository.save(existingQuiz);
    }

    /**
     * The method updates the "isUserFinished" field of a quiz with the given ID to
     * true.
     * 
     * @param quizId The quizId parameter is the unique identifier of the quiz that
     *               needs to be updated.
     */
    @Override
    public void updateIsUserFinished(long quizId) {

        Quiz existingQuiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with ID: " + quizId));

        existingQuiz.setUserFinished(true);

        quizRepository.save(existingQuiz);
    }

}
