package com.example.streamflix.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "movie_categories")
@Data
public class MovieCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
