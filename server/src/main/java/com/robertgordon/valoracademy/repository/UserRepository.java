package com.robertgordon.valoracademy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertgordon.valoracademy.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public List<User> findByRole(String role);

    public User findByUsername(String username);

}
