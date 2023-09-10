package com.robertgordon.valoracademy.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

/**
 * The `@Service` annotation is used to indicate that a class is a business
 * service layer component. It is used to provide a clear separation between the
 * business logic and the presentation layer.
 */
@Service
public class CourseServiceImpl implements CourseService {

    /**
     * `@Autowired` is injecting an instance of `CourseRepository` into the
     * `CourseServiceImpl` class, allowing it to access the methods defined in the
     * `CourseRepository` interface.
     */
    @Autowired
    private CourseRepository courseRepository;

    /**
     * This method saves a course object in the course repository and returns the
     * saved course.
     * 
     * @param course The parameter "course" is an object of the class "Course" that
     *               needs to be saved
     *               in the database. The method "saveCourse" takes this object as
     *               input and returns the saved
     *               object. The "courseRepository" is an instance of a repository
     *               interface that provides methods to
     *               interact with the database
     * @return The method `saveCourse` is returning an instance of the `Course`
     *         class that has been
     *         saved to the database using the `save` method of the
     *         `courseRepository`.
     */
    @Override
    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    /**
     * This method returns a list of all courses using the findAll() method from the
     * courseRepository.
     * 
     * @return A list of all courses from the course repository.
     */
    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    /**
     * This method retrieves a course by its ID from a repository and throws an
     * exception if it
     * does not exist.
     * 
     * @param courseId The ID of the course that we want to retrieve from the
     *                 database.
     * @return The method `getCourseById` returns a `Course` object with the
     *         specified `courseId`. If
     *         the course with the given `courseId` does not exist, it throws a
     *         `ResourceNotFoundException`
     *         with a message indicating that the course does not exist.
     */
    @Override
    public Course getCourseById(Long courseId) {
        return courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));
    }

    /**
     * This method updates an existing course with new information and returns the
     * updated course.
     * 
     * @param id     The ID of the course that needs to be updated.
     * @param course The `course` parameter is an instance of the `Course` class
     *               that contains the
     *               updated information for the course that needs to be updated in
     *               the database.
     * @return The updated course object is being returned.
     */
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

    /**
     * This method deletes a course with a given ID from a repository, throwing an
     * exception if
     * the course does not exist.
     * 
     * @param id The ID of the course that needs to be deleted.
     */
    @Override
    public void deleteCourse(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + id));

        courseRepository.delete(course);
    }

    /**
     * This method updates the published status of a course in a Java application.
     * 
     * @param courseId The ID of the course that needs to be updated.
     */
    @Override
    public void updatePublished(Long courseId) {

        Course existingCourse = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with ID: " + courseId));

        existingCourse.setPublished(!existingCourse.isPublished());

        courseRepository.save(existingCourse);
    }

    /**
     * The method updates the "isUserFinished" property of a course to true.
     * 
     * @param courseId The courseId parameter is the unique identifier of the course
     *                 that needs to be
     *                 updated.
     */
    @Override
    public void updateIsUserFinished(long courseId) {

        Course existingCourse = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with ID: " + courseId));

        existingCourse.setUserFinished(true);

        courseRepository.save(existingCourse);
    }

}
