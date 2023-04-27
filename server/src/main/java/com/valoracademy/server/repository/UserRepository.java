package com.valoracademy.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valoracademy.server.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
