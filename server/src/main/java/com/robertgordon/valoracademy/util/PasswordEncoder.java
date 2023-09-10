package com.robertgordon.valoracademy.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {

    /* This code creates a private static final instance of the `BCryptPasswordEncoder` class, which is used to
     encode and decode passwords using the bcrypt hashing algorithm. */
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    /**
     * This method encodes a given password using a password encoder.
     * @param password The password that needs to be encoded.
     * @return The method `encodePassword` returns a String that is the encoded version of the input
     * password.
     */
    public static String encodePassword(String password) {
        return encoder.encode(password);
    }

    /**
     * This method checks if a raw password matches an encoded password using an encoder.
     * @param rawPassword The raw (unencoded) password that is being checked against the encoded password.
     * @param encodedPassword The encoded password is a string that has been previously encrypted or
     * hashed using a specific algorithm.
     * @return The method `checkPassword` returns a boolean value indicating whether the `rawPassword`
     * matches the `encodedPassword` after being encoded using the `encoder` object.
     */
    public static boolean checkPassword(String rawPassword, String encodedPassword) {
        return encoder.matches(rawPassword, encodedPassword);
    }
}
