package com.example.streamflix.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "ratings")
@Data
public class Rating {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name = "user_id")
        private User user;

        @ManyToOne
        @JoinColumn(name = "movie_id")
        private Movie movie;

        private Double rating;

}
