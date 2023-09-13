package com.robertgordon.valoracademy.quiz_answer;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "answers")
@Data
public class Quiz_Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false, columnDefinition = "text", length = 10000000)
    private String content;

}
