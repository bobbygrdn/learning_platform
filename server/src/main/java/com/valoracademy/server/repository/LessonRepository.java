package com.valoracademy.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valoracademy.server.model.Lesson;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

}
