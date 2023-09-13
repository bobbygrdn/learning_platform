package com.robertgordon.valoracademy.quiz_answer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

@Service
public class Quiz_AnswerServiceImpl implements Quiz_Answer_Service {

    @Autowired
    private Quiz_AnswerRepository quiz_answerRepository;

    @Override
    public Quiz_Answer saveQuiz_Answer(Quiz_Answer quiz_answer) {
        return quiz_answerRepository.save(quiz_answer);
    }

    @Override
    public List<Quiz_Answer> getAllQuiz_Answers() {
        return quiz_answerRepository.findAll();
    }

    @Override
    public Quiz_Answer getQuiz_AnswerById(Long quiz_AnswerId) {
        return quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));
    }

    @Override
    public Quiz_Answer updateQuiz_Answer(Long quiz_AnswerId, Quiz_Answer quiz_answer) {
        Quiz_Answer existingQuiz_Answer = quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));

        existingQuiz_Answer.setContent(quiz_answer.getContent());

        return quiz_answerRepository.save(existingQuiz_Answer);
    }

    @Override
    public void deleteQuiz_Answer(Long quiz_AnswerId) {
        Quiz_Answer quiz_answer = quiz_answerRepository.findById(quiz_AnswerId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Quiz_Answer does not exist with the ID: " + quiz_AnswerId));

        quiz_answerRepository.delete(quiz_answer);
    }

}
