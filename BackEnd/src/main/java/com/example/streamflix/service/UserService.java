package com.example.streamflix.service;


import com.example.streamflix.model.User;
import com.example.streamflix.model.Role;
import com.example.streamflix.repos.RoleRepo;
import com.example.streamflix.repos.UserRepo;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private RoleRepo roleRepository;


    public User register(User user) {

        Role role = roleRepository.findByRolename("USER")
                .orElseThrow(() -> new RuntimeException("Role not found"));

        user.setRoleid(role);

        return userRepository.save(user);
    }


    public User login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getPassword().equals(password)) {
            return user;
        }

        throw new RuntimeException("Invalid password");
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}