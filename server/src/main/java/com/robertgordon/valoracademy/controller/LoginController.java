package com.robertgordon.valoracademy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.robertgordon.valoracademy.model.User;
import com.robertgordon.valoracademy.repository.UserRepository;
import com.robertgordon.valoracademy.util.PasswordEncoder;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/api/v1/login")
    public ResponseEntity<User> login(@RequestBody User user, HttpServletRequest request,
            HttpServletResponse response) {

        User existingUser = userRepository.findByUsername(user.getUsername());

        if (existingUser != null && PasswordEncoder.checkPassword(user.getPassword(), existingUser.getPassword())) {
            HttpSession session = request.getSession();
            session.setAttribute("user", existingUser);
            Cookie cookie = new Cookie("userId", String.valueOf(existingUser.getId()));
            if (user.isKeepLoggedIn() == true) {
                cookie.setMaxAge(60 * 60 * 24 * 365 * 10);
            }
            response.addCookie(cookie);
        }
        return ResponseEntity.ok(existingUser);
    }
}
