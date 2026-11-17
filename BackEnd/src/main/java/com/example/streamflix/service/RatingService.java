package com.example.streamflix.service;

import com.example.streamflix.model.Rating;
import com.example.streamflix.repos.RatingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    private RatingRepo ratingRepository;

    public Rating addRating(Rating rating) {
        return ratingRepository.save(rating);
    }

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public void deleteRating(Long id) {
        ratingRepository.deleteById(id);
    }
}
