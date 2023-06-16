package com.robertgordon.valoracademy.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.robertgordon.valoracademy.user.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/** `@Component` is used to mark the `JwtUtil` class as a Spring component so that it can be injected into other 
* Spring-managed classes using dependency injection. */
@Component
public class JwtUtil {

   /** `@Value("${jwt.secret}")` is a Spring annotation used to inject the value of the `jwt.secret`
    * property from the application properties file into the `secret` variable. This allows the
    * `secret` value to be easily changed without modifying the code. */
    @Value("${jwt.secret}")
    private String secret;

    /**
     * This method generates a JWT token for a given user and returns a map containing the token, user
     * ID, and user role.
     * @param existingUser an object of the User class that represents an existing user in the system.
     * @return A Map object containing a JWT token, user ID, and user role.
     */
    public Map<String, String> generateToken(User existingUser) {

        String jwtToken = "";
        jwtToken = Jwts.builder().setSubject(existingUser.getUsername()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secret").compact();
        Map<String, String> jwtTokenMap = new HashMap<>();
        jwtTokenMap.put("token", jwtToken);
        jwtTokenMap.put("id", String.valueOf(existingUser.getId()));
        jwtTokenMap.put("role", existingUser.getRole());
        return jwtTokenMap;
    }

}
