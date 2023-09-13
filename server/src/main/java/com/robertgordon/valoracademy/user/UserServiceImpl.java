package com.robertgordon.valoracademy.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.course.Course;
import com.robertgordon.valoracademy.course.CourseRepository;
import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.lesson.Lesson;
import com.robertgordon.valoracademy.util.PasswordEncoder;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public User saveUser(User user) {
        String encodePassword = PasswordEncoder.encodePassword(user.getPassword());
        user.setPassword(encodePassword);
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + userId));
    }

    @Override
    public User updateUser(Long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        existingUser.setUsername(user.getUsername());
        existingUser.setEmail(user.getEmail());
        String encodePassword = PasswordEncoder.encodePassword(user.getPassword());
        existingUser.setPassword(encodePassword);

        return userRepository.save(existingUser);
    }

    @Override
    public User updateUserRole(Long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        existingUser.setRole(user.getRole());

        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        userRepository.delete(user);
    }

    @Override
    public User resetPassword(long userId, String password) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + userId));

        user.setPassword(PasswordEncoder.encodePassword(password));

        return userRepository.save(user);
    }

    @Override
    public User enrollInCourse(long userId, long courseId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + userId));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course does not exist with the ID: " + courseId));

        user.addCourse(course);

        return userRepository.save(user);
    }

    @Override
    public User updateUserTitle(long id, String title) {

        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        existingUser.setTitle(title);

        return userRepository.save(existingUser);
    }

    @Override
    public Course completeLesson(long userId, long lessonId, long courseId) {

        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + userId));

        List<Course> courses = existingUser.getCourses();

        Course existingCourse = null;

        for (Course course : courses) {
            if (course.getId() == courseId) {
                existingCourse = course;
                break;
            }
        }

        Lesson lessonToChange = null;

        if (existingCourse != null) {
            List<Lesson> lessons = existingCourse.getLessons();
            for(Lesson lesson : lessons) {
                if(lesson.getId() == lessonId) {
                    lessonToChange = lesson;
                    break;
                }
            }
        }

        if (lessonToChange != null) {
            lessonToChange.setUserFinished(true);
        }

        return courseRepository.save(existingCourse);

    }

}
