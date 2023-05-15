package com.robertgordon.valoracademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertgordon.valoracademy.model.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
