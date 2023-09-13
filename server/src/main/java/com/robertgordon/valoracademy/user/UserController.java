package com.robertgordon.valoracademy.user;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.course.Course;
import com.robertgordon.valoracademy.util.UrlPaths;

@RestController
@RequestMapping(UrlPaths.CLASSURL)
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("signup")
    public User saveUser(@RequestBody User user) {
        return this.userService.saveUser(user);
    }

    @PostMapping("users/{id}/reset")
    public User resetPassword(@PathVariable("id") long userId, @RequestBody String password) {

        return this.userService.resetPassword(userId, password);

    }

    @PostMapping("users/{id}/enroll")
    public User enrollInCourse(@PathVariable("id") long userId, @RequestBody long courseId) {

        return this.userService.enrollInCourse(userId, courseId);
    }

    @GetMapping("users")
    public List<User> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId) {
        User user = this.userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @PutMapping("users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
            @RequestBody User user) {

        User existingUser = this.userService.updateUser(id, user);

        return ResponseEntity.ok(existingUser);
    }

    @PatchMapping("users/{id}/role")
    public ResponseEntity<User> updateUserRole(@PathVariable("id") Long id,
            @RequestBody User user) {
        User existingUser = this.userService.updateUserRole(id, user);

        return ResponseEntity.ok(existingUser);
    }

    @PatchMapping("users/{id}/warriorSelect")
    public ResponseEntity<User> updateUserTitle(@PathVariable("id") long id, @RequestBody String title) {

        User existingUser = this.userService.updateUserTitle(id, title);

        return ResponseEntity.ok(existingUser);
    }

    @PatchMapping("users/{userId}/completeLesson/{lessonId}")
    public ResponseEntity<Course> completeLesson(@PathVariable("userId") long userId,
            @PathVariable("lessonId") long lessonId, @RequestBody long courseId) {

        Course changedCourse = this.userService.completeLesson(userId, lessonId, courseId);
        return ResponseEntity.ok(changedCourse);

    }

    @DeleteMapping("users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {

        this.userService.deleteUser(id);
        return ResponseEntity.ok("User with ID: " + id + " has been deleted");
    }
}
