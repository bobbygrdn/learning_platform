package com.robertgordon.valoracademy.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

// `@ResponseStatus(value = HttpStatus.NOT_FOUND)` is being used to return a 404 response code
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    /**
     * This code snippet defines a private static final variable named serialVersionUID which is 
     * a unique identifier for a serialized Java object. The value of this variable is set to 1L.
     */
    private static final long serialVersionUID = 1L;

    /** This is a constructor for the ResourceNotFoundException class that takes a String message as a
     * parameter. It calls the constructor of the RuntimeException class (superclass) with the message
     * parameter, which sets the message of the exception. This allows the exception to be thrown with
     * a custom message when it is caught and handled. */
    public ResourceNotFoundException(String message) {
        super(message);
    }

}
