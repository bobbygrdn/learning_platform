package com.robertgordon.valoracademy.model;

import java.util.List;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "questions")
@Data
public class Quiz_Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private List<Quiz_Option> options;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private List<Quiz_Answer> answers;

}
