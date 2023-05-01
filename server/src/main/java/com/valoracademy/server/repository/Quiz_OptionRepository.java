package com.valoracademy.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valoracademy.server.model.Quiz_Option;

public interface Quiz_OptionRepository extends JpaRepository<Quiz_Option, Long> {

}
