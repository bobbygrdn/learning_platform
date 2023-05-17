package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.model.Course;
import com.robertgordon.valoracademy.model.User;
import com.robertgordon.valoracademy.service.CourseService;
import com.robertgordon.valoracademy.service.UserService;

@RestController
@RequestMapping("/api/v1/")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @Autowired
    private UserService userService;

    @PostMapping("users/{userId}/courses")
    public ResponseEntity<Course> createCourse(@PathVariable("userId") Long userId,
            @RequestBody Course courseRequest) {

        User user = this.userService.getUserById(userId);

        courseRequest.setUser(user);
        Course course = this.courseService.saveCourse(courseRequest);

        return ResponseEntity.ok(course);
    }

    @GetMapping("courses")
    public List<Course> getAllCourses() {
        return this.courseService.getAllCourses();
    }

    @GetMapping("courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long courseId) {

        Course course = this.courseService.getCourseById(courseId);
        return ResponseEntity.ok(course);
    }

    @PutMapping("courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable("id") Long courseId,
            @RequestBody Course course) {

        Course existingCourse = this.courseService.updateCourse(courseId, course);

        return ResponseEntity.ok(existingCourse);
    }

    @DeleteMapping("courses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {

        this.courseService.deleteCourse(courseId);
        return ResponseEntity.ok("Course with ID: " + courseId + " has been deleted");
    }
}
