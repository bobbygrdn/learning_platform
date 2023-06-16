package com.robertgordon.valoracademy.lesson;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.robertgordon.valoracademy.quiz.Quiz;

import lombok.Data;

/** `@Entity` is being used to map this class to a database table. 
 * `@Table(name = "lessons")` specifies the name of the table in the database that
 * this entity will be mapped to. 
 * `@Data` is a Lombok annotation that generates boilerplate code for getters, setters, and other methods. */
@Entity
@Table(name = "lessons")
@Data
public class Lesson {

    /** `@Id` is an annotation used to mark the primary key of the entity. 
     * `@GeneratedValue` is used to specify how the primary key should be generated. 
     * `GenerationType.IDENTITY` specifies that the primary key should be generated by
     *  the database. 
     * `private long id;` is a field that represents the primary key of the entity. */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** `@Column(name = "title", nullable = false)` is an annotation used to specify
     *  that the `title`
     * field should be mapped to a column in the database table named `title`. 
     * The `nullable = false` parameter specifies that the `title` field cannot be null in the database. 
     * The `private String title;` line is declaring a field named `title` of type `String` in the `Lesson` class. */
    @Column(name = "title", nullable = false)
    private String title;

    /** `@Column(name = "description", nullable = false)` is an annotation used to
     *  specify that the `description`
     *  field should be mapped to a column in the database table named `description`. 
     *  The `nullable = false` parameter specifies that the `description` field cannot be null in the database. 
     * The `private String description;` line is declaring a field named `description` of type `String` in the `Lesson` class. */
    @Column(name = "description", nullable = false)
    private String description;

    /** `@Column(name = "content", nullable = false)` is an annotation used to specify
     *  that the `content`
     *  field should be mapped to a column in the database table named `content`. 
     *  The `nullable = false` parameter specifies that the `content` field cannot be null in the database. 
     * The `private String content;` line is declaring a field named `content` of type `String` in the `Lesson` class. */
    @Column(name = "content", nullable = false)
    private String content;

    /** `@Column(name = "published", nullable = false, columnDefinition = "boolean 
     * default 'false'")` is an annotation used to 
     * specify that the `isPublished`
     *  field should be mapped to a column in the database table named 
     * `published`. 
     *  The `nullable = false` parameter specifies that the `isPublished` field 
     * cannot be null in the database. 
     * The `columnDefinition` is used to define the default value of the column which
     * in this case is set to false
     * The `private boolean isPublished;` line is declaring a field named `isPublished` of type `boolean` in the `Lesson` class. */
    @Column(name = "published", nullable = false, columnDefinition = "varchar(255) default 'false'")
    private boolean isPublished;

    /** `@Column(name = "finished", nullable = false, columnDefinition = "varchar(255) 
     * default 'false'")` is an annotation used to 
     * specify that the `isUserFinished`
     *  field should be mapped to a column in the database table named 
     * `finished`. 
     *  The `nullable = false` parameter specifies that the `isUserFinished` field 
     * cannot be null in the database. 
     * The `columnDefinition` is used to define the default value of the column which
     * in this case is set to false
     * The `private boolean isUserFinished;` line is declaring a field named `isUserFinished` of type `boolean` in the `Lesson` class. */
    @Column(name = "finished", nullable = false, columnDefinition = "varchar(255) default 'false'")
    private boolean isUserFinished;

    /** `@Column(name = "progress", nullable = false, columnDefinition = "int 
     * default '0'")` is an annotation used to 
     * specify that the `userProgress`
     *  field should be mapped to a column in the database table named 
     * `finished`. 
     *  The `nullable = false` parameter specifies that the `userProgress` field 
     * cannot be null in the database. 
     * The `columnDefinition` is used to define the default value of the column which
     * in this case is set to 0
     * The `private int userProgress;` line is declaring a field named `userProgress` of type `int` in the `Lesson` class. */
    @Column(name = "progress", nullable = false, columnDefinition = "int default '0'")
    private int userProgress;

    /** This code is defining a one-to-many relationship between the `Lesson` entity 
     * and the `Quiz` entity.
     *  `JoinColumn` is being used to name the column `lesson_id`
     *  in the `quizzes` table that references the `id` column in the `lessons` table. 
     *  `Private List<Quiz> quizzes` is being used to save all the quizzes belonging
     *  to the `Lesson` in an `ArrayList`. */
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "lesson_id")
    private List<Quiz> quizzes = new ArrayList<>();

}
