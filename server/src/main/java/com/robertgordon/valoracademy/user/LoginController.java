package com.robertgordon.valoracademy.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.robertgordon.valoracademy.util.JwtUtil;
import com.robertgordon.valoracademy.util.PasswordEncoder;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

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
