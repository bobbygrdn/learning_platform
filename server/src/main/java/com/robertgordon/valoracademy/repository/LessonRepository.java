package com.robertgordon.valoracademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertgordon.valoracademy.model.Lesson;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

}
