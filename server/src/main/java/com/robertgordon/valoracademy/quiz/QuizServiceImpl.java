package com.robertgordon.valoracademy.quiz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    @Override
    public Quiz getQuizById(Long quizId) {
        return quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + quizId));
    }

    @Override
    public Quiz updateQuiz(Long id, Quiz quiz) {
        Quiz existingQuiz = quizRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + id));

        existingQuiz.setTitle(quiz.getTitle());
        existingQuiz.setDescription(quiz.getDescription());

        return quizRepository.save(existingQuiz);
    }

    @Override
    public void deleteQuiz(Long id) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with the ID: " + id));

        quizRepository.delete(quiz);
    }

    @Override
    public void updatePublished(long quizId) {

        Quiz existingQuiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with ID: " + quizId));

        existingQuiz.setPublished(!existingQuiz.isPublished());

        quizRepository.save(existingQuiz);
    }

    @Override
    public void updateIsUserFinished(long quizId) {

        Quiz existingQuiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz does not exist with ID: " + quizId));

        existingQuiz.setUserFinished(true);

        quizRepository.save(existingQuiz);
    }

}
