package com.robertgordon.valoracademy.lesson;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.robertgordon.valoracademy.quiz.Quiz;

import lombok.Data;

@Entity
@Table(name = "lessons")
@Data
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false, columnDefinition = "text", length = 10000000)
    private String title;

    @Column(name = "description", nullable = false, columnDefinition = "text", length = 10000000)
    private String description;

    @Column(name = "content", nullable = false, columnDefinition = "text", length = 10000000)
    private String content;

    @Column(name = "published", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isPublished;

    @Column(name = "finished", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isUserFinished;

    @Column(name = "progress", nullable = false, columnDefinition = "int default '0'")
    private int userProgress;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "lesson_id")
    private List<Quiz> quizzes = new ArrayList<>();

}
