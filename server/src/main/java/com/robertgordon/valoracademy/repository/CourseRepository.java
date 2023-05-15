package com.robertgordon.valoracademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertgordon.valoracademy.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
