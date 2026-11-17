package com.example.streamflix.service;

import com.example.streamflix.model.MovieCategory;
import com.example.streamflix.repos.MovieCategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieCategoryService {

    @Autowired
    private MovieCategoryRepo movieCategoryRepository;

    public MovieCategory addMovieCategory(MovieCategory movieCategory) {
        return movieCategoryRepository.save(movieCategory);
    }

    public List<MovieCategory> getAllMovieCategories() {
        return movieCategoryRepository.findAll();
    }

    public void deleteMovieCategory(Long id) {
        movieCategoryRepository.deleteById(id);
    }
}