package com.valoracademy.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.valoracademy.server.exception.ResourceNotFoundException;
import com.valoracademy.server.model.Course;
import com.valoracademy.server.model.Lesson;
import com.valoracademy.server.repository.CourseRepository;
import com.valoracademy.server.repository.LessonRepository;

@RestController
@RequestMapping("/api/v1/")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private LessonRepository lessonRepository;

    @PostMapping("/courses")
    public Course saveCourse(@RequestBody Course course) {
        return this.courseRepository.save(course);
    }

    @PostMapping("/courses/{id}/lessons")
    public Lesson saveLesson(@PathVariable("id") Long courseId, @RequestBody Lesson lesson) {
        Course course = this.courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));
        lesson.setCourse(course);
        return this.lessonRepository.save(lesson);
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return this.courseRepository.findAll();
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long courseId) {
        Course course = this.courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));
        return ResponseEntity.ok(course);
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable("id") Long courseId,
            @RequestBody Course course) {
        Course existingCourse = this.courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));

        existingCourse.setTitle(course.getTitle());
        existingCourse.setDescription(course.getDescription());
        existingCourse.setUser(course.getUser());

        Course updatedCourse = this.courseRepository.save(existingCourse);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {
        Course course = this.courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));

        this.courseRepository.delete(course);
        return ResponseEntity.ok("Course with ID: " + courseId + " has been deleted");
    }
}
