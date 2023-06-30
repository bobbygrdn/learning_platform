package com.robertgordon.valoracademy.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.robertgordon.valoracademy.course.Course;

import lombok.Data;

/**
 * `@Entity` is being used to map this class to a database table.
 * `@Table(name = "users")` specifies the name of the table in the database that
 * this entity will be mapped to.
 * `@Data` is a Lombok annotation that generates boilerplate code for getters,
 * setters, and other methods.
 */
@Entity
@Table(name = "users")
@Data
public class User {

    /**
     * `@Id` is an annotation used to mark the primary key of the entity.
     * `@GeneratedValue` is used to specify how the primary key should be generated.
     * `GenerationType.IDENTITY` specifies that the primary key should be generated
     * by
     * the database.
     * `private long id;` is a field that represents the primary key of the entity.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * `@Column(name = "username", nullable = false)` is an annotation used to
     * specify
     * that the `username`
     * field should be mapped to a column in the database table named `username`.
     * The `nullable = false` parameter specifies that the `username` field cannot
     * be
     * null in the database.
     * The `private String username;` line is declaring a field named `username` of
     * type `String` in the `User` class.
     */
    @Column(name = "username", nullable = false)
    private String username;

    /**
     * `@Column(name = "password", nullable = false)` is an annotation used to
     * specify
     * that the `password`
     * field should be mapped to a column in the database table named `password`.
     * The `nullable = false` parameter specifies that the `password` field cannot
     * be
     * null in the database.
     * The `private String password;` line is declaring a field named `password` of
     * type `String` in the `User` class.
     */
    @Column(name = "password", nullable = false)
    private String password;

    /**
     * `@Column(name = "email", nullable = false)` is an annotation used to specify
     * that the `email`
     * field should be mapped to a column in the database table named `email`.
     * The `nullable = false` parameter specifies that the `email` field cannot be
     * null in the database.
     * The `private String email;` line is declaring a field named `email` of
     * type `String` in the `User` class.
     */
    @Column(name = "email", nullable = false)
    private String email;

    /**
     * `@Column(name = "role", nullable = false)` is an annotation used to specify
     * that the `role`
     * field should be mapped to a column in the database table named `role`.
     * The `nullable = false` parameter specifies that the `role` field cannot be
     * null in the database.
     * The `private String role;` line is declaring a field named `role` of
     * type `String` in the `User` class.
     */
    @Column(name = "role", nullable = false)
    private String role;

    /**
     * The `@Column(name = "title")` annotation is used to specify that the `title`
     * field should be mapped
     * to a column in the database table named `title`. This annotation is used in
     * conjunction with the
     * `@Entity` and `@Table` annotations to define the mapping between the Java
     * object and the database
     * table. The `private String title;` line declares a field named `title` of
     * type
     * `String` in the
     * `User` class.
     */
    @Column(name = "title")
    private String title;

    /**
     * The `@Column(name = "experience")` annotation is used to specify that the
     * `experience` field should be mapped to a column in the database table named
     * `experience`. This annotation is used
     * in conjunction with the `@Entity` and `@Table` annotations to define the
     * mapping between the
     * Java object and the database table. The `private long experience;` line
     * declares a field named
     * `experience` of type `long` in the `User` class.
     */
    @Column(name = "experience", columnDefinition = "int default 0")
    private int experience;

    /**
     * The `@Column(name = "learningStreak")` annotation is used to specify that the
     * `learningStreak`
     * field should be mapped to a column in the database table named
     * `learningStreak`. This annotation
     * is used in conjunction with the `@Entity` and `@Table` annotations to
     * define the mapping between
     * the Java object and the database table.
     */
    @Column(name = "learningStreak", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDate learningStreak;

    /**
     * The `@Column(name = "mastery")` annotation is used to specify that the
     * `mastery` field should be
     * mapped to a column in the database table named `mastery`. This annotation
     * is used in conjunction
     * with the `@Entity` and `@Table` annotations to define the mapping between
     * the Java object and the
     * database table. The `private String mastery;` line declares a field named
     * `mastery` of type
     * `String` in the `User` class.
     */
    @Column(name = "mastery")
    private String mastery;

    /**
     * This code is creating a one-to-many relationship between the `Course` entity
     * and
     * the `User` entity.
     * `JoinColumn` is being used to name the column `my_courses`
     * in the `users` table that references the `id` column in the `courses` table.
     * `Private List<Course> myCourses` is being used to save all the courses the
     * user has signed up for in an `ArrayList`.
     */
    @OneToMany(cascade = CascadeType.ALL)
    @Column(name = "course_id")
    private List<Course> courses = new ArrayList<>();

}
