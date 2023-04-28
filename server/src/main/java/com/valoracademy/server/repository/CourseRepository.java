package com.valoracademy.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valoracademy.server.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
