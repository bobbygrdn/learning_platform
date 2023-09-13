package com.robertgordon.valoracademy.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.user.User;
import com.robertgordon.valoracademy.user.UserService;
import com.robertgordon.valoracademy.util.UrlPaths;

@RestController
@RequestMapping(UrlPaths.CLASSURL)
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

    @PatchMapping("courses/{id}")
    public ResponseEntity<String> updatePublished(@PathVariable("id") Long courseId) {

        courseService.updatePublished(courseId);

        return ResponseEntity.ok("Course with id " + courseId + " has been updated");
    }

    @PatchMapping("courses/{id}/finished")
    public ResponseEntity<String> updateIsUserFinished(@PathVariable("id") long courseId) {

        courseService.updateIsUserFinished(courseId);

        return ResponseEntity.ok("Lesson with id " + courseId + " has been finished");
    }

    @DeleteMapping("courses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {

        this.courseService.deleteCourse(courseId);
        return ResponseEntity.ok("Course with ID: " + courseId + " has been deleted");
    }
}
