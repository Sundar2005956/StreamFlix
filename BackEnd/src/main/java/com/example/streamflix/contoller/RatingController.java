package com.example.streamflix.contoller;

import com.example.streamflix.model.Rating;
import com.example.streamflix.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/ratings")
@CrossOrigin(origins = "http://localhost:5173")
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
