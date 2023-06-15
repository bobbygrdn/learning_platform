package com.robertgordon.valoracademy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.User;
import com.robertgordon.valoracademy.repository.UserRepository;
import com.robertgordon.valoracademy.service.UserService;
import com.robertgordon.valoracademy.util.PasswordEncoder;

/** The `@Service` annotation is used to indicate that a class is a business
 * service layer component. It is used to provide a clear separation between the 
 * business logic and the presentation layer. */
@Service
public class UserServiceImpl implements UserService {

    /** `@Autowired` is injecting an instance of `UserRepository` into the
     *  `UserServiceImpl` class, allowing it to access the methods defined in the
     *  `UserRepository` interface. */
    @Autowired
    private UserRepository userRepository;

    /**
     * This method saves a user by encoding their password and then saving them to the
     *  user repository.
     *  @param user The "user" parameter is an instance of the User class, which 
     * contains information about a user such as their name, email, and password. The
     *  method is taking this user object as input and saving it to a database using
     *  the userRepository. Before saving, the method is encoding the user's password 
     * using
     * @return The method is returning a User object that has been saved in the 
     * userRepository after encoding the password.
     */
    @Override
    public User saveUser(User user) {
        String encodePassword = PasswordEncoder.encodePassword(user.getPassword());
        user.setPassword(encodePassword);
        return userRepository.save(user);
    }

    /**
     * This method returns a list of all users from the user repository.
     * 
     * @return A list of User objects is being returned. The list contains all the 
     * users that are stored in the userRepository.
     */
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * This method retrieves a user by their ID from a user repository and throws a 
     * resource not found exception if the user does not exist.
     * @param userId userId is a Long type variable that represents the unique
     *  identifier of a user. It is used as a parameter to retrieve a specific user 
     * from the database.
     * @return The method is returning a User object with the specified userId. If the
     * user with the given userId is not found in the userRepository, then a 
     * ResourceNotFoundException is thrown with a message indicating that the user 
     * does not exist with the given ID.
     */
    @Override
    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + userId));
    }

    /**
     * This method updates an existing user's username, email, and password in the 
     * database.
     * @param id The ID of the user that needs to be updated in the database.
     * @param user The "user" parameter is an instance of the User class that contains
     *  the updated information for an existing user. It includes the new username, 
     * email, and password for the user.
     * @return The method is returning an updated User object after updating the 
     * username, email, and password of an existing user in the database.
     */
    @Override
    public User updateUser(Long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        existingUser.setUsername(user.getUsername());
        existingUser.setEmail(user.getEmail());
        String encodePassword = PasswordEncoder.encodePassword(user.getPassword());
        existingUser.setPassword(encodePassword);

        return userRepository.save(existingUser);
    }

   /**
    * This method updates the role of an existing user in the database.
    * @param id The ID of the user that needs to be updated.
    * @param user The "user" parameter is an instance of the User class, which contains 
    * information about a user such as their name, email, password, and role. In this 
    * method, the "user" parameter is used to update the role of an existing user in 
    * the database.
    * @return The method is returning an updated User object with the new role that was
    * set.
    */
    @Override
    public User updateUserRole(Long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        existingUser.setRole(user.getRole());

        return userRepository.save(existingUser);
    }

    /**
     * This method deletes a user with a given ID from a user repository, throwing a
     * resource not found exception if the user does not exist.
     * @param id The id parameter is a Long value representing the unique identifier 
     * of the user that needs to be deleted from the database.
     */
    @Override
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with the ID: " + id));

        userRepository.delete(user);
    }

}
