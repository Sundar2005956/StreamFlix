
package com.example.streamflix.config;

import com.example.streamflix.model.Role;
import com.example.streamflix.model.User;
import com.example.streamflix.repos.RoleRepo;
import com.example.streamflix.repos.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AdminSeeder implements CommandLineRunner {

    private final RoleRepo roleRepo;
    private final UserRepo userRepo;

    public AdminSeeder(RoleRepo roleRepo, UserRepo userRepo) {
        this.roleRepo = roleRepo;
        this.userRepo = userRepo;
    }

    @Override
    public void run(String... args) {

        Role role = roleRepo.findByRolename("ADMIN").orElse(null);

        if (role == null) {
            role = new Role();
            role.setRolename("ADMIN");
            role = roleRepo.save(role);
        }

        boolean adminExists = userRepo.findAll().stream()
                .anyMatch(user -> user.getEmail().equals("admin@streamflix.com"));

        if (!adminExists) {
            User admin = new User();

            admin.setFullname("StreamFlix Admin");
            admin.setEmail("admin@streamflix.com");
            admin.setPassword("Admin@123");
            admin.setRoleid(role);

            userRepo.save(admin);

            System.out.println("StreamFlix Admin Created!");
        }
    }
}
