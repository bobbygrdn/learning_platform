package com.robertgordon.valoracademy.course;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.robertgordon.valoracademy.lesson.Lesson;
import com.robertgordon.valoracademy.user.User;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "courses")
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title", nullable = false, columnDefinition = "text", length = 10000000)
    private String title;

    @Column(name = "description", nullable = false, columnDefinition = "text", length = 10000000)
    private String description;

    @Column(name = "topics", nullable = false, columnDefinition = "text", length = 10000000)
    private String topics;

    @Column(name = "difficulty", nullable = false)
    private String difficulty;

    @Column(name = "time_needed", nullable = false)
    private String timeToComplete;
    
    @Column(name = "published", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isPublished;

    @Column(name = "finished", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isUserFinished;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "course_id")
    private List<Lesson> lessons = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

}
