package com.example.streamflix.contoller;

import com.example.streamflix.model.User;
import com.example.streamflix.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        System.out.println("Register API called");
        return userService.register(user);
    }


    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.login(user.getEmail(), user.getPassword());
    }

    @GetMapping("/getUser")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    @GetMapping("/getUser/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/getUser/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully";
    }
}
