package com.example.streamflix.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "full_name")
    private String fullname;

    private String email;
    private String password;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role roleid;
    private LocalDateTime createdAt=LocalDateTime.now();
}
