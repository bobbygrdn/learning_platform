package com.robertgordon.valoracademy.model;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "settings")
@Data
public class Settings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "registrations", nullable = false)
    private boolean registrations;

}
