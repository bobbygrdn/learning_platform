package com.valoracademy.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.valoracademy.server.exception.ResourceNotFoundException;
import com.valoracademy.server.model.Lesson;
import com.valoracademy.server.repository.LessonRepository;

@RestController
@RequestMapping("/api/v1/")
public class LessonController {

    @Autowired
    private LessonRepository lessonRepository;

    @GetMapping("/lessons")
    public List<Lesson> getAllLessons() {
        return this.lessonRepository.findAll();
    }

    @GetMapping("/lessons/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable("id") Long lessonId) {
        Lesson lesson = this.lessonRepository.findById(lessonId)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));
        return ResponseEntity.ok(lesson);
    }

    @PutMapping("/lessons/{id}")
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

    @DeleteMapping("/lessons/{id}")
    public ResponseEntity<String> deleteLesson(@PathVariable("id") Long lessonId) {
        Lesson lesson = this.lessonRepository.findById(lessonId)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));

        this.lessonRepository.delete(lesson);
        return ResponseEntity.ok("Lesson with ID: " + lessonId + " has been deleted");
    }
}
