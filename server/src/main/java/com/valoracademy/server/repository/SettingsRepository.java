package com.valoracademy.server.repository;

import com.valoracademy.server.model.Settings;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingsRepository extends JpaRepository<Settings, Long> {

}
