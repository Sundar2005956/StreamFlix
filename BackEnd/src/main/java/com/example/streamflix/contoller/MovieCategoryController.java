package com.example.streamflix.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.streamflix.model.MovieCategory;
import com.example.streamflix.service.MovieCategoryService;
@RestController
@RequestMapping("/api/moviecategories")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://sundar2005956.github.io"
})
public class MovieCategoryController {
    @Autowired
    private MovieCategoryService movieCategoryService;

    @PostMapping("/add")
    public MovieCategory addMovieCategory(@RequestBody MovieCategory movieCategory) {
        return movieCategoryService.addMovieCategory(movieCategory);
    }

    @GetMapping("/get")
    public List<MovieCategory> getAllMovieCategories() {
        return movieCategoryService.getAllMovieCategories();
    }

    @DeleteMapping("/get/{id}")
    public String deleteMovieCategory(@PathVariable Long id) {
        movieCategoryService.deleteMovieCategory(id);
        return "Movie category deleted successfully";
    }
}
