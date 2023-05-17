package com.robertgordon.valoracademy.service;

import java.util.List;

import com.robertgordon.valoracademy.model.Lesson;

public interface LessonService {

    Lesson saveLesson(Lesson lesson);

    List<Lesson> getAllLessons();

    Lesson getLessonById(Long lessonId);

    Lesson updateLesson(Long id, Lesson lesson);

    void deleteLesson(Long id);
}
