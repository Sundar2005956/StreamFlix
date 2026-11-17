package com.example.streamflix.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "movies")
@Data
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private Integer releaseYear;

    private String posterUrl;

    private String trailerUrl;

    private String videoUrl;

    private Double rating;

    private LocalDateTime createdAt = LocalDateTime.now();
}
