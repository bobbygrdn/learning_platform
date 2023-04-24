package repository;

import org.springframework.data.repository.CrudRepository;

import model.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {

}
