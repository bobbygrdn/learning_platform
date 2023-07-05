package com.robertgordon.valoracademy.user;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.util.UrlPaths;

/**
 * `@RestController` is an annotation in Spring that combines `@Controller` and
 * `@ResponseBody`. It is used to indicate that the class is a RESTful web
 * service
 * controller that handles HTTP requests and returns the response in the form of
 * JSON.
 */
@RestController
/*
 * `@RequestMapping(UrlPaths.CLASSURL)` is setting the base URL path for all the
 * endpoints in this controller to "/api/v1/" from the `UrlPaths class`. This
 * means that all the endpoints in this controller will be accessed through URLs
 * that start with "/api/v1/".
 */
@RequestMapping(UrlPaths.CLASSURL)
public class UserController {

    /**
     * `@Autowired` is an annotation in Spring that allows automatic dependency
     * injection. In this case, it is injecting an instance of the `UserService`
     * interface into the `UserController` class. This allows the `UserController`
     * to use the methods defined in the `UserService` interface without having to
     * create a new instance of the `UserService` class.
     */
    @Autowired
    private UserService userService;

    /**
     * This method saves a user by accepting a user object as a request body and
     * returning the saved user.
     * 
     * @param user The "user" parameter is an object of the User class that is
     *             received as a request body in a POST request to the "/signup"
     *             endpoint.
     *             The method "saveUser" of the controller class takes this user
     *             object as input,
     *             passes it to the "saveUser" method of the "userService
     * @return The `saveUser` method is returning a `User` object.
     */
    @PostMapping("signup")
    public User saveUser(@RequestBody User user) {
        return this.userService.saveUser(user);
    }

    /**
     * This method is a POST request mapping that resets the password for a
     * user with the given ID.
     * 
     * @param userId   The userId parameter is a long value that represents the
     *                 unique identifier of the
     *                 user whose password needs to be reset. It is extracted from
     *                 the path variable in the URL
     *                 ("/users/{id}/reset").
     * @param password The password parameter is a string that represents the new
     *                 password that the
     *                 user wants to set.
     * @return The method is returning a User object.
     */
    @PostMapping("users/{id}/reset")
    public User resetPassword(@PathVariable("id") long userId, @RequestBody String password) {

        return this.userService.resetPassword(userId, password);

    }

    /**
     * This method is a POST request mapping that enrolls a user in a course.
     * 
     * @param userId   The userId parameter is a long value that represents the
     *                 unique identifier of the
     *                 user who wants to enroll in a course.
     * @param courseId The courseId parameter is the unique identifier of the course
     *                 that the user
     *                 wants to enroll in.
     * @return The method is returning a User object.
     */
    @PostMapping("users/{id}/enroll")
    public User enrollInCourse(@PathVariable("id") long userId, @RequestBody long courseId) {

        return this.userService.enrollInCourse(userId, courseId);
    }

    /**
     * This method returns a list of all users.
     * 
     * @return A list of User objects is being returned.
     */
    @GetMapping("users")
    public List<User> getAllUsers() {
        return this.userService.getAllUsers();
    }

    /**
     * This method retrieves a user by their ID and returns a ResponseEntity
     * containing
     * the user object.
     * 
     * @param userId The userId is a path variable that is extracted from the URL of
     *               the GET request. It represents the unique identifier of the
     *               user that the client
     *               is requesting to retrieve from the server.
     * @return A ResponseEntity object containing a User object with the specified
     *         userId.
     */
    @GetMapping("users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long userId) {
        User user = this.userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    /**
     * This method updates a user with the given ID and returns the updated user as
     * a
     * ResponseEntity.
     * 
     * @param id   The ID of the user that needs to be updated. It is passed as a
     *             path
     *             variable in the URL.
     * @param user The user parameter is a request body that contains the updated
     *             information for the user that needs to be updated in the
     *             database. It is sent
     *             as a JSON object in the request body.
     * @return A ResponseEntity object containing the updated User object is being
     *         returned.
     */
    @PutMapping("users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id,
            @RequestBody User user) {

        User existingUser = this.userService.updateUser(id, user);

        return ResponseEntity.ok(existingUser);
    }

    /**
     * This method updates the role of a user with the given ID and returns the
     * updated user.
     * 
     * @param id   The ID of the user whose role needs to be updated. It is
     *             extracted
     *             from the URL path using the @PathVariable annotation.
     * @param user The user parameter is a request body that contains the updated
     *             information for the user whose role is being updated. It is of
     *             type User,
     *             which is a custom class representing a user in the system. The
     *             user object
     *             contains properties such as name, email, password, and role.
     * @return A ResponseEntity object containing the updated User object with the
     *         specified ID.
     */
    @PatchMapping("users/{id}/role")
    public ResponseEntity<User> updateUserRole(@PathVariable("id") Long id,
            @RequestBody User user) {
        User existingUser = this.userService.updateUserRole(id, user);

        return ResponseEntity.ok(existingUser);
    }

    /**
     * This method deletes a user with a specific ID and returns a message
     * confirming the deletion.
     * 
     * @param id The id parameter is a Long type variable that represents the unique
     *           identifier of a user that needs to be deleted. It is obtained from
     *           the URL path
     *           using the @PathVariable annotation.
     * @return A ResponseEntity object with a status code of 200 (OK) and a message
     *         indicating that the user with the specified ID has been deleted.
     */
    @DeleteMapping("users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {

        this.userService.deleteUser(id);
        return ResponseEntity.ok("User with ID: " + id + " has been deleted");
    }
}
