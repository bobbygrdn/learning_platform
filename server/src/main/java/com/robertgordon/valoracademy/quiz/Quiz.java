package com.robertgordon.valoracademy.quiz;

import java.util.List;

import javax.persistence.*;

import com.robertgordon.valoracademy.quiz_question.Quiz_Question;

import lombok.Data;

@Entity
@Table(name = "quizzes")
@Data
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false, columnDefinition = "text", length = 10000000)
    private String title;

    @Column(name = "description", nullable = false, columnDefinition = "text", length = 10000000)
    private String description;

    @Column(name = "published", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isPublished;

    @Column(name = "finished", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isUserFinished;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id")
    private List<Quiz_Question> questions;

}
