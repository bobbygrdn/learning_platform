package com.robertgordon.valoracademy.course;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {

    public List<Course> findByDifficulty(String difficulty);

    public List<Course> findByTimeToComplete(String timeToComplete);

}
