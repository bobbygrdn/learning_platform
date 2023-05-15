package com.robertgordon.valoracademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertgordon.valoracademy.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
