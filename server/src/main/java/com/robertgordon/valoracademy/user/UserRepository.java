package com.robertgordon.valoracademy.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public List<User> findByRole(String role);

    public User findByUsername(String username);

}
