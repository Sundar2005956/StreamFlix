package com.example.streamflix.model;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
    @Table(name = "watch_history")
    @Data
    public class WatchHistory {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name = "user_id")
        private User user;

        @ManyToOne
        @JoinColumn(name = "movie_id")
        private Movie movie;

        private LocalDateTime watchedAt = LocalDateTime.now();
    }

