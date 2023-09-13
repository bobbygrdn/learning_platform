package com.robertgordon.valoracademy.lesson;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.course.CourseService;
import com.robertgordon.valoracademy.util.UrlPaths;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "https://valor-academy-ui.onrender.com")
@RequestMapping(UrlPaths.CLASSURL)
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @Autowired
    private CourseService courseService;

    @PostMapping("courses/{courseid}/lessons")
    public ResponseEntity<Lesson> createLesson(@PathVariable("courseid") Long courseId,
            @RequestBody Lesson lessonRequest) {

        this.courseService.getCourseById(courseId).getLessons().add(lessonRequest);

        Lesson lesson = this.lessonService.saveLesson(lessonRequest);

        return ResponseEntity.ok(lesson);

    }

    @GetMapping("lessons")
    public List<Lesson> getAllLessons() {
        return this.lessonService.getAllLessons();
    }

    @GetMapping("lessons/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable("id") Long lessonId) {

        Lesson lesson = this.lessonService.getLessonById(lessonId);
        return ResponseEntity.ok(lesson);
    }

    @PutMapping("lessons/{id}")
    public ResponseEntity<Lesson> updateLesson(@PathVariable("id") Long lessonId,
            @RequestBody Lesson lesson) {

        Lesson existingLesson = this.lessonService.updateLesson(lessonId, lesson);

        return ResponseEntity.ok(existingLesson);
    }

    @PatchMapping("lessons/{id}")
    public ResponseEntity<String> updatePublished(@PathVariable("id") Long lessonId) {

        lessonService.updatePublished(lessonId);

        return ResponseEntity.ok("Lesson with id " + lessonId + " has been updated");
    }

    @PatchMapping("lessons/{id}/progress")
    public ResponseEntity<String> updateUserProgress(@PathVariable("id") long lessonId, @RequestBody int progress) {

        lessonService.updateProgress(lessonId, progress);

        return ResponseEntity.ok("Lesson progress with id " + lessonId + " has now been updated");
    }

    @PatchMapping("lessons/{id}/finished")
    public ResponseEntity<String> updateIsUserFinished(@PathVariable("id") long lessonId) {

        lessonService.updateIsUserFinished(lessonId);

        return ResponseEntity.ok("Lesson with id " + lessonId + " has been finished");
    }

    @DeleteMapping("lessons/{id}")
    public ResponseEntity<String> deleteLesson(@PathVariable("id") Long lessonId) {

        this.lessonService.deleteLesson(lessonId);
        return ResponseEntity.ok("Lesson with ID: " + lessonId + " has been deleted");
    }
}
