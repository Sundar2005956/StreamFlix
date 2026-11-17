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

import com.example.streamflix.model.Rating;
import com.example.streamflix.service.RatingService;
@RestController
@RequestMapping("/api/ratings")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://sundar2005956.github.io"
})
public class RatingController {
    @Autowired
    private RatingService ratingService;

    @PostMapping("/add")
    public Rating addRating(@RequestBody Rating rating) {
        return ratingService.addRating(rating);
    }

    @GetMapping("/get")
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @DeleteMapping("/get/{id}")
    public String deleteRating(@PathVariable Long id) {
        ratingService.deleteRating(id);
        return "Rating deleted successfully";
    }
}
