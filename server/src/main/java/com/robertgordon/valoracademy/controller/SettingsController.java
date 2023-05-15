package com.robertgordon.valoracademy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Settings;
import com.robertgordon.valoracademy.repository.SettingsRepository;

@RestController
@RequestMapping("/api/v1/")
public class SettingsController {

    @Autowired
    private SettingsRepository settingsRepository;

    @PostMapping("settings")
    public Settings saveSettings(Settings settings) {
        return this.settingsRepository.save(settings);
    }

    @GetMapping("settings")
    public List<Settings> getAllSettings() {
        return this.settingsRepository.findAll();
    }

    @GetMapping("settings/{id}")
    public ResponseEntity<Settings> getSettingsById(@PathVariable("id") Long id) {
        Settings settings = this.settingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + id));
        return ResponseEntity.ok(settings);
    }

    @PutMapping("settings/{id}")
    public ResponseEntity<Settings> updateSettings(@PathVariable("id") Long id, @RequestBody Settings settings) {

        Settings existingSettings = this.settingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + id));

        existingSettings.setRegistrations(settings.isRegistrations());

        Settings updatedSettings = this.settingsRepository.save(existingSettings);
        return ResponseEntity.ok(updatedSettings);
    }

    @DeleteMapping("settings/{id}")
    public ResponseEntity<String> deleteSettings(@PathVariable("id") Long id) {
        Settings settings = this.settingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + id));

        this.settingsRepository.delete(settings);
        return ResponseEntity.ok("Settings with ID: " + id + " has been deleted.");
    }
}
