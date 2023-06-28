package com.robertgordon.valoracademy.course;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.robertgordon.valoracademy.lesson.Lesson;
import com.robertgordon.valoracademy.user.User;

import javax.persistence.*;
import lombok.Data;

/**
 * `@Entity` is being used to map this class to a database table.
 * `@Table(name = "courses")` specifies the name of the table in the database
 * that
 * this entity will be mapped to.
 * `@Data` is a Lombok annotation that generates boilerplate code for getters,
 * setters,
 * and other methods.
 */
@Entity
@Table(name = "courses")
@Data
public class Course {

    /**
     * `@Id` is an annotation used to mark the primary key of the entity.
     * `@GeneratedValue` is used to specify how the primary key should be generated.
     * `GenerationType.IDENTITY` specifies that the primary key should be generated
     * by
     * the database.
     * `private long id;` is a field that represents the primary key of the
     * entity.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    /**
     * `@Column(name = "title", nullable = false)` is an annotation used to specify
     * that the `title`
     * field should be mapped to a column in the database table named `title`.
     * The `nullable = false` parameter specifies that the `title` field cannot be
     * null
     * in the database.
     * The `private String title;` line is declaring a field named `title` of type
     * `String` in the `Course` class.
     */
    @Column(name = "title", nullable = false, columnDefinition = "text", length = 10000000)
    private String title;

    /**
     * `@Column(name = "description", nullable = false)` is an annotation used to
     * specify that the `description`
     * field should be mapped to a column in the database table named `description`.
     * The `nullable = false` parameter specifies that the `description` field
     * cannot
     * be null in the database.
     * The `private String description;` line is declaring a field named
     * `description` of type `String` in the `Course` class.
     */
    @Column(name = "description", nullable = false, columnDefinition = "text", length = 10000000)
    private String description;

    /**
     * `@Column(name = "topics", nullable = false)` is an annotation used to specify
     * that the `topics`
     * field should be mapped to a column in the database table named `topics`.
     * The `nullable = false` parameter specifies that the `topics` field cannot be
     * null in the database.
     * The `private String topics;` line is declaring a field named `topics` of type
     * `String` in the `Course` class.
     */
    @Column(name = "topics", nullable = false, columnDefinition = "text", length = 10000000)
    private String topics;

    /**
     * `@Column(name = "difficulty", nullable = false)` is an annotation used to
     * specify that the `difficulty`
     * field should be mapped to a column in the database table named `difficulty`.
     * The `nullable = false` parameter specifies that the `difficulty` field cannot
     * be null in the database.
     * The `private String difficulty;` line is declaring a field named `difficulty`
     * of type `String` in the `Course` class.
     */
    @Column(name = "difficulty", nullable = false)
    private String difficulty;

    /**
     * `@Column(name = "timeToComplete", nullable = false)` is an annotation used to
     * specify that the `timeToComplete`
     * field should be mapped to a column in the database table named
     * `timeToComplete`.
     * The `nullable = false` parameter specifies that the `timeToComplete` field
     * cannot be null in the database.
     * The `private String timeToComplete;` line is declaring a field named
     * `timeToComplete` of type `String` in the `Course` class.
     */
    @Column(name = "time_needed", nullable = false)
    private String timeToComplete;

    /**
     * `@Column(name = "published", nullable = false, columnDefinition =
     * "varchar(255)
     * default 'false'")` is an annotation used to
     * specify that the `isPublished`
     * field should be mapped to a column in the database table named
     * `published`.
     * The `nullable = false` parameter specifies that the `isPublished` field
     * cannot be null in the database.
     * The `columnDefinition` is used to define the default value of the column
     * which
     * in this case is set to false
     * The `private boolean isPublished;` line is declaring a field named
     * `isPublished` of type `boolean` in the `Course` class.
     */
    @Column(name = "published", nullable = false, columnDefinition = "TINYINT(1) default 0")
    private boolean isPublished;

    /**
     * `@Column(name = "finished", nullable = false, columnDefinition =
     * "varchar(255)
     * default 'false'")` is an annotation used to
     * specify that the `isUserFinished`
     * field should be mapped to a column in the database table named
     * `finished`.
     * The `nullable = false` parameter specifies that the `isUserFinished` field
     * cannot be null in the database.
     * The `columnDefinition` is used to define the default value of the column
     * which
     * in this case is set to false
     * The `private boolean isUserFinished;` line is declaring a field named
     * `isUserFinished` of type `boolean` in the `Course` class.
     */
    @Column(name = "finished", nullable = false, columnDefinition = "TINYINT(1) default 0")
    private boolean isUserFinished;

    /**
     * This code is creating a one-to-many relationship between the `Course` entity
     * and
     * the `Lesson` entity.
     * `JoinColumn` is being used to name the column `course_id`
     * in the `lessons` table that references the `id` column in the `courses`
     * table.
     * `Private List<Lesson> lessons` is being used to save all the lessons
     * belonging to the `Course` in an `ArrayList`.
     */
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "course_id")
    private List<Lesson> lessons = new ArrayList<>();

    /**
     * This code is creating a many-to-one relationship between the `Course` entity
     * and the `User` entity.
     * It is specifying that each `Course` is associated with one `User`, and that
     * the
     * `User`
     * field should be lazily fetched from the database (i.e. only loaded when
     * needed).
     * The `@JoinColumn` annotation is used to specify the name of the foreign key
     * column in the `courses`
     * table that references the `id` column in the `users` table.
     * The `nullable = false` parameter specifies that a `Course` must always have a
     * `User` associated with it.
     * The `@JsonIgnore` annotation is used to prevent the `User` field from being
     * serialized to JSON,
     * to avoid circular references and infinite recursion.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

}
