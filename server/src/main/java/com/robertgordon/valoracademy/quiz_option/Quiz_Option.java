package com.robertgordon.valoracademy.quiz_option;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "options")
@Data
public class Quiz_Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false, columnDefinition = "text", length = 10000000)
    private String content;

}
