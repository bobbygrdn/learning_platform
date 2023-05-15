package com.robertgordon.valoracademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertgordon.valoracademy.model.Quiz_Question;

public interface Quiz_QuestionRepository extends JpaRepository<Quiz_Question, Long> {

}
