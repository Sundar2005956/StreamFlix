package com.example.streamflix.repos;

import com.example.streamflix.model.Category;
import com.example.streamflix.repos.CategoryRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CategorySeeder {

    @Bean
    CommandLineRunner seedCategories(CategoryRepo categoryRepository) {
        return args -> {

            if (categoryRepository.count() == 0) {

                String[] categories = {
                        "Action", "Comedy", "Horror",
                        "Thriller", "Romance", "Drama",
                        "Sci-Fi", "Adventure"
                };

                for (String name : categories) {
                    Category category = new Category();
                    category.setCategoryname(name);
                    categoryRepository.save(category);
                }
            }
        };
    }
}