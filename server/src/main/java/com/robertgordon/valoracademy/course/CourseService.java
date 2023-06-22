package com.robertgordon.valoracademy.course;

import java.util.List;

public interface CourseService {

    Course saveCourse(Course course);

    List<Course> getAllCourses();

    Course getCourseById(Long courseId);

    Course updateCourse(Long id, Course course);

    void deleteCourse(Long id);

    void updatePublished(Long courseId);
}
