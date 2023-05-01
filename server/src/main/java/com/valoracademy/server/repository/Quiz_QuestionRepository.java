package com.valoracademy.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valoracademy.server.model.Quiz_Question;

public interface Quiz_QuestionRepository extends JpaRepository<Quiz_Question, Long> {

}
