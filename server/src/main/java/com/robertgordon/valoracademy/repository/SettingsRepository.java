package com.robertgordon.valoracademy.repository;

import com.robertgordon.valoracademy.model.Settings;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SettingsRepository extends JpaRepository<Settings, Long> {

}
