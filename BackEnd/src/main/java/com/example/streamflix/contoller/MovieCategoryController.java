package com.example.streamflix.contoller;

import com.example.streamflix.model.MovieCategory;
import com.example.streamflix.service.MovieCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/moviecategories")
@CrossOrigin(origins = "http://localhost:5173")
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
