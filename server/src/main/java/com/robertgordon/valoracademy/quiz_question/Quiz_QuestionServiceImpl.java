package com.robertgordon.valoracademy.quiz_question;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

@Service
public class Quiz_QuestionServiceImpl implements Quiz_QuestionService {

    @Autowired
    private Quiz_QuestionRepository quiz_QuestionRepository;

    @Override
    public Quiz_Question saveQuiz_Question(Quiz_Question quiz_Question) {
        return quiz_QuestionRepository.save(quiz_Question);
    }

    @Override
    public List<Quiz_Question> getAllQuiz_Questions() {
        return quiz_QuestionRepository.findAll();
    }

    @Override
    public Quiz_Question getQuiz_QuestionById(Long id) {
        return quiz_QuestionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz_Question does not exist with the ID: " + id));
    }

    @Override
    public Quiz_Question updateQuiz_Question(Long id, Quiz_Question quiz_Question) {
        Quiz_Question existingQuiz_Question = quiz_QuestionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz_Question does not exist with the ID: " + id));

        existingQuiz_Question.setTitle(quiz_Question.getTitle());
        existingQuiz_Question.setContent(quiz_Question.getContent());

        return quiz_QuestionRepository.save(existingQuiz_Question);
    }

    @Override
    public void deleteQuiz_Question(Long id) {
        Quiz_Question quiz_Question = quiz_QuestionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz_Question does not exist with the ID: " + id));

        quiz_QuestionRepository.delete(quiz_Question);
    }

    @Override
    public void updatePublished(long questionId) {

        Quiz_Question existingQuestion = quiz_QuestionRepository.findById(questionId)
                .orElseThrow(() -> new ResourceNotFoundException("Question does not exist with ID: " + questionId));

        existingQuestion.setPublished(!existingQuestion.isPublished());

        quiz_QuestionRepository.save(existingQuestion);
    }

    @Override
    public void updateIsUserFinished(long questionId) {

        Quiz_Question existingQuestion = quiz_QuestionRepository.findById(questionId)
                .orElseThrow(() -> new ResourceNotFoundException("Question does not exist with ID: " + questionId));

        existingQuestion.setUserFinished(true);

        quiz_QuestionRepository.save(existingQuestion);
    }

}
