package com.robertgordon.valoracademy.service;

import java.util.List;

import com.robertgordon.valoracademy.model.User;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(Long userId);

    User updateUser(Long id, User user);

    User updateUserRole(Long id, User user);

    void deleteUser(Long id);
}
