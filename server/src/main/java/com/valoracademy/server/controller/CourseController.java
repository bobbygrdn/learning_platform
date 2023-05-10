package com.valoracademy.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.valoracademy.server.exception.ResourceNotFoundException;
import com.valoracademy.server.model.Course;
import com.valoracademy.server.model.User;
import com.valoracademy.server.repository.CourseRepository;
import com.valoracademy.server.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("users/{userId}/courses")
    public ResponseEntity<Course> createCourse(@PathVariable("userId") Long userId,
            @RequestBody Course courseRequest) {

        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + userId));

        courseRequest.setUser(user);
        Course course = this.courseRepository.save(courseRequest);

        return ResponseEntity.ok(course);
    }

    @GetMapping("courses")
    public List<Course> getAllCourses() {
        return this.courseRepository.findAll();
    }

    @GetMapping("courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long courseId) {
        Course course = this.courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));
        return ResponseEntity.ok(course);
    }

    @PutMapping("courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable("id") Long courseId,
            @RequestBody Course course) {
        Course existingCourse = this.courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));

        existingCourse.setTitle(course.getTitle());
        existingCourse.setDescription(course.getDescription());

        Course updatedCourse = this.courseRepository.save(existingCourse);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("courses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {
        Course course = this.courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));

        this.courseRepository.delete(course);
        return ResponseEntity.ok("Course with ID: " + courseId + " has been deleted");
    }
}
