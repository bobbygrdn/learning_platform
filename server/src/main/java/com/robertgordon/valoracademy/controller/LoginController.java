package com.robertgordon.valoracademy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.robertgordon.valoracademy.model.User;
import com.robertgordon.valoracademy.repository.UserRepository;
import com.robertgordon.valoracademy.util.JwtUtil;
import com.robertgordon.valoracademy.util.PasswordEncoder;

/* `@RestController` is an annotation in Spring that combines `@Controller` and `@ResponseBody`. It is used to indicate that the class is a RESTful web service controller that handles HTTP requests and returns the response in the form of JSON. */
@RestController
public class LoginController {

    /* @Autowired is used to inject instances of `UserRepository` and `JwtUtil` into the `LoginController` class. This allows the controller to use these dependencies without having to manually create instances of them. */
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * This method handles user login by checking if the user exists and if the password is correct, and returns a JWT token if successful.
     * @param user The user object is a request body parameter that contains the username and password of the user trying to log in. It is passed as a JSON object in the request body.
     * @return If the login is successful, a ResponseEntity containing a JWT token generated for the user is returned. If the login is unsuccessful, a ResponseEntity with an error message and a HTTP status code of CONFLICT is returned.
     */
    @PostMapping("/api/v1/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        User existingUser = userRepository.findByUsername(user.getUsername());

        if (existingUser != null && PasswordEncoder.checkPassword(user.getPassword(), existingUser.getPassword())) {

            return ResponseEntity.ok(jwtUtil.generateToken(existingUser));

        } else {
            return new ResponseEntity<>("Could not login user.", HttpStatus.CONFLICT);
        }
    }
}
