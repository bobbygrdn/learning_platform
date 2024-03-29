package com.robertgordon.valoracademy.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.robertgordon.valoracademy.user.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

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
        jwtTokenMap.put("characterAge", String.valueOf(existingUser.getCharacterAge()));
        jwtTokenMap.put("mastery", existingUser.getMastery());

        return jwtTokenMap;
    }

}
