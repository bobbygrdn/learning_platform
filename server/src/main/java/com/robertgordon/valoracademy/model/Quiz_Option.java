package com.robertgordon.valoracademy.model;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "options")
@Data
public class Quiz_Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false)
    private String content;

}
