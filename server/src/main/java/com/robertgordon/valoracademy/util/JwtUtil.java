package com.robertgordon.valoracademy.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.robertgordon.valoracademy.user.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * `@Component` is used to mark the `JwtUtil` class as a Spring component so
 * that it can be injected into other
 * Spring-managed classes using dependency injection.
 */
@Component
public class JwtUtil {

    /**
     * `@Value("${jwt.secret}")` is a Spring annotation used to inject the value of
     * the `jwt.secret`
     * property from the application properties file into the `secret` variable.
     * This allows the
     * `secret` value to be easily changed without modifying the code.
     */
    @Value("${jwt.secret}")
    private String secret;

    
    /**
     * The method generates a JWT token and returns a map containing the token and user information.
     * 
     * @param existingUser The existingUser parameter is an object of the User class. It represents the
     * user for whom the token is being generated. The User class likely has properties such as id,
     * username, role, title, experience, learningStreak, and mastery.
     * @return The method is returning a Map<String, String> object.
     */
    public Map<String, String> generateToken(User existingUser) {

        String jwtToken = "";
        jwtToken = Jwts.builder().setSubject(existingUser.getUsername()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secret").compact();
        Map<String, String> jwtTokenMap = new HashMap<>();
        jwtTokenMap.put("token", jwtToken);
        jwtTokenMap.put("id", String.valueOf(existingUser.getId()));
        jwtTokenMap.put("role", existingUser.getRole());
        jwtTokenMap.put("username", existingUser.getUsername());
        jwtTokenMap.put("title", existingUser.getTitle());
        jwtTokenMap.put("experience", String.valueOf(existingUser.getExperience()));
        jwtTokenMap.put("learningStreak", String.valueOf(existingUser.getLearningStreak()));
        jwtTokenMap.put("mastery", existingUser.getMastery());

        return jwtTokenMap;
    }

}
