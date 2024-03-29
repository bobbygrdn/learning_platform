package com.robertgordon.valoracademy.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(Long courseId) {
        return courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));
    }

    @Override
    public Course updateCourse(Long id, Course course) {
        Course existingCourse = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + id));

        existingCourse.setTitle(course.getTitle());
        existingCourse.setDescription(course.getDescription());
        existingCourse.setTopics(course.getTopics());
        existingCourse.setDifficulty(course.getDifficulty());
        existingCourse.setTimeToComplete(course.getTimeToComplete());

        return courseRepository.save(existingCourse);
    }

    @Override
    public void deleteCourse(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + id));

        courseRepository.delete(course);
    }

    @Override
    public void updatePublished(Long courseId) {

        Course existingCourse = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with ID: " + courseId));

        existingCourse.setPublished(!existingCourse.isPublished());

        courseRepository.save(existingCourse);
    }

    @Override
    public void updateIsUserFinished(long courseId) {

        Course existingCourse = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with ID: " + courseId));

        existingCourse.setUserFinished(true);

        courseRepository.save(existingCourse);
    }

}
