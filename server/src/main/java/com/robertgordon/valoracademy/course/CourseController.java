package com.robertgordon.valoracademy.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.user.User;
import com.robertgordon.valoracademy.user.UserService;
import com.robertgordon.valoracademy.util.UrlPaths;


/** `@RestController` is an annotation in Spring that combines `@Controller` and 
 *  `@ResponseBody`. It is used to indicate that the class is a RESTful web service
 *  controller that handles HTTP requests and returns the response in the form of JSON. */
@RestController
/*
 * `@RequestMapping(UrlPaths.CLASSURL)` is setting the base URL path for all the endpoints in this controller to "/api/v1/" from the `UrlPaths class`. This means that all the endpoints in this controller will be accessed through URLs that start with "/api/v1/".
 */
@RequestMapping(UrlPaths.CLASSURL)
public class CourseController {

    /*
     * In this code, @Autowired is used to inject instances of `CourseService` and
     * `UserService` into the
     * `CourseController` class, so that the controller can use their methods to
     * handle HTTP requests
     * related to courses and users.
     */
    @Autowired
    private CourseService courseService;

    @Autowired
    private UserService userService;

    /**
     * This method creates a new course for a user and returns the saved course as
     * a response.
     * @param userId A Long value representing the ID of the user who is creating the course.
     * @param courseRequest The request body containing the details of the course to be created.
     * @return A ResponseEntity object containing the created Course object is being returned.
     */
    @PostMapping("users/{userId}/courses")
    public ResponseEntity<Course> createCourse(@PathVariable("userId") Long userId,
            @RequestBody Course courseRequest) {


        User user = this.userService.getUserById(userId);

        courseRequest.setUser(user);
        Course course = this.courseService.saveCourse(courseRequest);

        return ResponseEntity.ok(course);
    }

    /**
     * This method returns a list of all courses using the courseService.
     * 
     * @return A list of all courses.
     */
    @GetMapping("courses")
    public List<Course> getAllCourses() {
        return this.courseService.getAllCourses();
    }

  
    /**
     * This method retrieves a course by its ID and returns it as a ResponseEntity object.
     * @param courseId The courseId is a Long variable that represents the unique identifier of a course. It is obtained from the path variable in the URL of the GET request.
     * @return A ResponseEntity object containing a Course object with the specified ID.
     */
    @GetMapping("courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long courseId) {

        Course course = this.courseService.getCourseById(courseId);
        return ResponseEntity.ok(course);
    }

    
    /**
     * This method updates a course with the given ID and returns the updated course as a ResponseEntity. 
     * @param courseId The ID of the course that needs to be updated. It is obtained from the URL path variable using the @PathVariable annotation.
     * @param course The `course` parameter is a `Course` object that is being passed in the request body. It contains the updated information for the course that needs to be updated in the database.
     * @return A ResponseEntity object containing the updated Course object is being returned.
     */
    @PutMapping("courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable("id") Long courseId,
            @RequestBody Course course) {

        Course existingCourse = this.courseService.updateCourse(courseId, course);

        return ResponseEntity.ok(existingCourse);
    }

   
  /**
   * This method deletes a course with a specific ID and returns a message confirming the deletion.
   * @param courseId The ID of the course that needs to be deleted. It is obtained from the path variable in the URL.
   * @return A ResponseEntity object with a message indicating that the course with the specified ID has been deleted.
   */
    @DeleteMapping("courses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {

        this.courseService.deleteCourse(courseId);
        return ResponseEntity.ok("Course with ID: " + courseId + " has been deleted");
    }
}
