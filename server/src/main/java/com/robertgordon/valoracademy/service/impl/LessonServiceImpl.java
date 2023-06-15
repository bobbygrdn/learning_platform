package com.robertgordon.valoracademy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Lesson;
import com.robertgordon.valoracademy.repository.LessonRepository;
import com.robertgordon.valoracademy.service.LessonService;

/** The `@Service` annotation is used to indicate that a class is a business
 * service layer component. It is used to provide a clear separation between the 
 * business logic and the presentation layer. */
@Service
public class LessonServiceImpl implements LessonService {

    /** `@Autowired` is injecting an instance of `LessonRepository` into the
     *  `LessonServiceImpl` class, allowing it to access the methods defined in the
     *  `LessonRepository` interface. */
    @Autowired
    private LessonRepository lessonRepository;

   /**
    * This method saves a lesson object using the lesson repository.
    * @param lesson The parameter "lesson" is an object of the class "Lesson" that is being passed as an argument to the method "saveLesson". This object contains the 
    * data related to a particular lesson that needs to be saved in the database. The
    * method "saveLesson" uses the "lessonRepository" to
    * @return The method `saveLesson` is returning an instance of the `Lesson` class,
    * which is the result of saving the `lesson` object to the `lessonRepository`.
    */
    @Override
    public Lesson saveLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    /**
     * This method returns a list of all lessons using the findAll() method from the
     * lessonRepository.
     * 
     * @return A list of all the lessons from the lesson repository.
     */
    @Override
    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    /**
     * This method retrieves a lesson by its ID from a repository and throws an 
     * exception if it does not exist.
     * @param lessonId lessonId is a Long type parameter representing the unique 
     * identifier of a lesson. It is used to retrieve a specific lesson from the 
     * database by calling the findById method of the lessonRepository. If the 
     * lesson with the given lessonId does not exist in the
     * database, a ResourceNotFoundException is thrown.
     * @return The method is returning a Lesson object with the specified lessonId. 
     * If the lesson with the given ID does not exist, it throws a 
     * ResourceNotFoundException.
     */
    @Override
    public Lesson getLessonById(Long lessonId) {
        return lessonRepository.findById(lessonId)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));
    }

    /**
     * This method updates an existing lesson with new information and returns the updated lesson.
     * @param id The ID of the lesson that needs to be updated.
     * @param lesson The "lesson" parameter is an instance of the Lesson class that
     * contains the updated information for an existing lesson. It includes the new
     *  title, description, and content for the lesson.
     * @return The method is returning an updated Lesson object that has been saved to the database.
     */
    @Override
    public Lesson updateLesson(Long id, Lesson lesson) {
        Lesson existingLesson = lessonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + id));

        existingLesson.setTitle(lesson.getTitle());
        existingLesson.setDescription(lesson.getDescription());
        existingLesson.setContent(lesson.getContent());

        return lessonRepository.save(existingLesson);
    }

    /**
     * This method deletes a lesson by its ID from a lesson repository and 
     * throws an exception if the lesson does not exist.
     *  @param id The parameter "id" is a Long data type representing the unique
     * identifier of a Lesson entity that needs to be deleted from the database.
     */
    @Override
    public void deleteLesson(Long id) {
        Lesson lesson = lessonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + id));

        lessonRepository.delete(lesson);
    }

}
