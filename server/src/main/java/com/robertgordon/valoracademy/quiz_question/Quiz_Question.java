package com.robertgordon.valoracademy.quiz_question;

import java.util.List;

import javax.persistence.*;

import com.robertgordon.valoracademy.quiz_answer.Quiz_Answer;
import com.robertgordon.valoracademy.quiz_option.Quiz_Option;

import lombok.Data;

@Entity
@Table(name = "questions")
@Data
public class Quiz_Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false, columnDefinition = "text", length = 10000000)
    private String title;

    @Column(name = "content", nullable = false, columnDefinition = "text", length = 10000000)
    private String content;

    @Column(name = "published", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isPublished;

    @Column(name = "finished", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    private boolean isUserFinished;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private List<Quiz_Option> options;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private List<Quiz_Answer> answers;

}
