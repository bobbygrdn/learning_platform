package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.Course;
import repository.CourseRepository;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course getCourseById(Integer id) {
        return courseRepository.findById(id).orElse(null);
    }

    public Iterable<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public void deleteCourseById(Integer id) {
        courseRepository.deleteById(id);
    }
}
