package com.robertgordon.valoracademy.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public static String encodePassword(String password) {
        return encoder.encode(password);
    }

    public static boolean checkPassword(String rawPassword, String encodedPassword) {
        return encoder.matches(rawPassword, encodedPassword);
    }
}
