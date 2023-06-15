package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.model.Lesson;
import com.robertgordon.valoracademy.service.CourseService;
import com.robertgordon.valoracademy.service.LessonService;

/* `@RestController` is an annotation that combines `@Controller` and `@ResponseBody`, indicating that this class is a RESTful controller that will handle HTTP requests and return the response in the form of JSON. */
@RestController
/*
 * `@RequestMapping("/api/v1/")` is setting the base URL path for all the
 * endpoints in this controller to "/api/v1/". This means that all the endpoints
 * in this controller will be accessed through URLs
 * that start with "/api/v1/".
 */
@RequestMapping("/api/v1/")
public class LessonController {

    /*
     * In this code, @Autowired is used to inject instances of `CourseService` and
     * `UserService` into the
     * `CourseController` class, so that the controller can use their methods to
     * handle HTTP requests
     * related to lessons and courses.
     */
    @Autowired
    private LessonService lessonService;

    @Autowired
    private CourseService courseService;

    /**
     * This method creates a new lesson and adds it to a course's list of lessons.
     * @param courseId A Long value representing the ID of the course to which the lesson will be added.
     * @param lessonRequest The request body containing the details of the lesson to be created. It is annotated with @RequestBody to indicate that the data should be extracted from the request body.
     * @return A ResponseEntity object containing the saved Lesson object is being returned.
     */
    @PostMapping("courses/{courseid}/lessons")
    public ResponseEntity<Lesson> createLesson(@PathVariable("courseid") Long courseId,
            @RequestBody Lesson lessonRequest) {

        this.courseService.getCourseById(courseId).getLessons().add(lessonRequest);

        Lesson lesson = this.lessonService.saveLesson(lessonRequest);

        return ResponseEntity.ok(lesson);

    }

    /**
     * Returns a list of all lessons.
     *
     * @return a list of Lesson objects representing all lessons
     */
    @GetMapping("lessons")
    public List<Lesson> getAllLessons() {
        return this.lessonService.getAllLessons();
    }

    /**
     * This method retrieves a lesson by its ID and returns it as a ResponseEntity.
     * @param lessonId The lessonId is a path variable that is passed in the URL as a parameter. It is of type Long and represents the unique identifier of the lesson that the user wants to retrieve.
     * @return A ResponseEntity object containing a Lesson object with the specified lessonId.
     */
    @GetMapping("lessons/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable("id") Long lessonId) {

        Lesson lesson = this.lessonService.getLessonById(lessonId);
        return ResponseEntity.ok(lesson);
    }

   /**
    * This method updates a lesson with the given ID and returns the updated lesson as a response entity.
    * @param lessonId A Long variable representing the ID of the lesson to be updated.
    * @param lesson The lesson parameter is a request body that contains the updated information for the lesson that needs to be updated. It is of type Lesson, which is a custom class that represents a lesson in the system.
    * @return A ResponseEntity object containing the updated Lesson object.
    */
    @PutMapping("lessons/{id}")
    public ResponseEntity<Lesson> updateLesson(@PathVariable("id") Long lessonId,
            @RequestBody Lesson lesson) {

        Lesson existingLesson = this.lessonService.updateLesson(lessonId, lesson);

        return ResponseEntity.ok(existingLesson);
    }

    /**
     * This method deletes a lesson with a specified ID and returns a success message.
     * @param lessonId The ID of the lesson that needs to be deleted. It is obtained from the path variable "{id}" in the URL of the DELETE request.
     * @return A ResponseEntity object with a status code of 200 (OK) and a message indicating that the lesson with the specified ID has been deleted.
     */
    @DeleteMapping("lessons/{id}")
    public ResponseEntity<String> deleteLesson(@PathVariable("id") Long lessonId) {

        this.lessonService.deleteLesson(lessonId);
        return ResponseEntity.ok("Lesson with ID: " + lessonId + " has been deleted");
    }
}
