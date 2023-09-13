package com.robertgordon.valoracademy.lesson;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

@Service
public class LessonServiceImpl implements LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Override
    public Lesson saveLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    @Override
    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    @Override
    public Lesson getLessonById(Long lessonId) {
        return lessonRepository.findById(lessonId)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + lessonId));
    }

    @Override
    public Lesson updateLesson(Long id, Lesson lesson) {
        Lesson existingLesson = lessonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + id));

        existingLesson.setTitle(lesson.getTitle());
        existingLesson.setDescription(lesson.getDescription());
        existingLesson.setContent(lesson.getContent());

        return lessonRepository.save(existingLesson);
    }

    @Override
    public void deleteLesson(Long id) {
        Lesson lesson = lessonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with the ID: " + id));

        lessonRepository.delete(lesson);
    }

    @Override
    public void updatePublished(Long lessonId) {
        
        Lesson existingLesson = lessonRepository.findById(lessonId).orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with ID: " + lessonId));

        existingLesson.setPublished(!existingLesson.isPublished());

        lessonRepository.save(existingLesson);
    }

    @Override
    public void updateProgress(long lessonId, int progress) {
        
        Lesson existingLesson = lessonRepository.findById(lessonId).orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with ID: " + lessonId));

        existingLesson.setUserProgress(progress);

        lessonRepository.save(existingLesson);
    }

    @Override
    public void updateIsUserFinished(long lessonId) {
        
        Lesson existingLesson = lessonRepository.findById(lessonId).orElseThrow(() -> new ResourceNotFoundException("Lesson does not exist with ID: " + lessonId));

        existingLesson.setUserFinished(true);

        lessonRepository.save(existingLesson);
    }

}
