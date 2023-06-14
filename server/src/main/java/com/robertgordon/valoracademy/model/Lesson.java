package com.robertgordon.valoracademy.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "lessons")
@Data
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "content", nullable = false)
    private String content;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "lesson_id")
    private List<Quiz> quizzes = new ArrayList<>();

}
