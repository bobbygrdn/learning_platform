package com.valoracademy.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valoracademy.server.model.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
