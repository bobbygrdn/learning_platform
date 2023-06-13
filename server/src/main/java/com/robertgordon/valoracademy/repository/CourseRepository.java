package com.robertgordon.valoracademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertgordon.valoracademy.model.Course;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {

    public List<Course> findByDifficulty(String difficulty);

    public List<Course> findByTimeToComplete(String timeToComplete);

}
