package com.example.streamflix.repos;

import com.example.streamflix.model.MovieCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieCategoryRepo extends JpaRepository<MovieCategory,Long> {
}
