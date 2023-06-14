package com.robertgordon.valoracademy.model;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "answers")
@Data
public class Quiz_Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false)
    private String content;

}
