package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Lesson;
import com.robertgordon.valoracademy.repository.CourseRepository;
import com.robertgordon.valoracademy.repository.LessonRepository;

@RestController
@RequestMapping("/api/v1/")
public class LessonController {

    // TODO: refactor this to implement the LessonService interface
    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/courses/{courseid}/lessons")
    public ResponseEntity<Lesson> createLesson(@PathVariable("courseid") Long courseId,
            @RequestBody Lesson lessonRequest) {
        Lesson lesson = this.courseRepository.findById(courseId).map(course -> {
            course.getLessons().add(lessonRequest);
            return lessonRepository.save(lessonRequest);
        }).orElseThrow((() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId)));

        return ResponseEntity.ok(lesson);

    }

    @GetMapping("lessons")
    public List<Lesson> getAllLessons() {
        return this.lessonRepository.findAll();
    }

    @GetMapping("lessons/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable("id") Long lessonId) {
        Lesson lesson = this.lessonRepository.findById(lessonId)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));
        return ResponseEntity.ok(lesson);
    }

    @PutMapping("lessons/{id}")
    public ResponseEntity<Lesson> updateLesson(@PathVariable("id") Long lessonId,
            @RequestBody Lesson lesson) {

        Lesson existingLesson = this.lessonRepository.findById(lessonId)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));

        existingLesson.setTitle(lesson.getTitle());
        existingLesson.setDescription(lesson.getDescription());
        existingLesson.setContent(lesson.getContent());

        Lesson updatedLesson = this.lessonRepository.save(existingLesson);
        return ResponseEntity.ok(updatedLesson);
    }

    @DeleteMapping("lessons/{id}")
    public ResponseEntity<String> deleteLesson(@PathVariable("id") Long lessonId) {
        Lesson lesson = this.lessonRepository.findById(lessonId)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));

        this.lessonRepository.delete(lesson);
        return ResponseEntity.ok("Lesson with ID: " + lessonId + " has been deleted");
    }
}
