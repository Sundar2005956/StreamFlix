package com.example.streamflix.repos;
import com.example.streamflix.model.Role;
import com.example.streamflix.repos.RoleRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RoleSeeder {

    @Bean
    CommandLineRunner seedRoles(RoleRepo roleRepository) {
        return args -> {

            if (roleRepository.count() == 0) {

                Role admin = new Role();
                admin.setRolename("ADMIN");

                Role user = new Role();
                user.setRolename("USER");

                roleRepository.save(admin);
                roleRepository.save(user);
            }
        };
    }
}
