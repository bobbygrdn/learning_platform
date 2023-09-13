package com.robertgordon.valoracademy.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.robertgordon.valoracademy.course.Course;

import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "title")
    private String title;

    @Column(name = "experience", columnDefinition = "int default 0")
    private int experience;

    @Column(name = "character_age")
    private LocalDate characterAge = LocalDate.now();

    @Column(name = "mastery")
    private String mastery;

    @OneToMany(cascade = CascadeType.ALL)
    @Column(name = "course_id")
    private List<Course> courses = new ArrayList<>();

    public void addCourse(Course course) {
        if (courses.contains(course)) {
            return;
        }
        this.courses.add(course);
    }

}
