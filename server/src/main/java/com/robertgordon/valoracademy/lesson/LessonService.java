package com.robertgordon.valoracademy.lesson;

import java.util.List;

public interface LessonService {

    Lesson saveLesson(Lesson lesson);

    List<Lesson> getAllLessons();

    Lesson getLessonById(Long lessonId);

    Lesson updateLesson(Long id, Lesson lesson);

    void deleteLesson(Long id);

    void updatePublished(Long lessonId);
}
