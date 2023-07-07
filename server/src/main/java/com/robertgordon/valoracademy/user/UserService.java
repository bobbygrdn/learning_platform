package com.robertgordon.valoracademy.user;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(Long userId);

    User updateUser(Long id, User user);

    User updateUserRole(Long id, User user);

    void deleteUser(Long id);

    User resetPassword(long userId, String password);

    User enrollInCourse(long userId, long courseId);

    User updateUserTitle(long id, String title);
}
