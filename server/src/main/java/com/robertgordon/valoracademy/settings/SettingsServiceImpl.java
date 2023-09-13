package com.robertgordon.valoracademy.settings;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;

@Service
public class SettingsServiceImpl implements SettingsService {

    @Autowired
    private SettingsRepository settingsRepository;

    @Override
    public Settings saveSettings(Settings settings) {
        return settingsRepository.save(settings);
    }

    @Override
    public List<Settings> getAllSettings() {
        return settingsRepository.findAll();
    }

    @Override
    public Settings getSettingsById(Long settingsId) {
        Settings settings = settingsRepository.findById(settingsId)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + settingsId));
        return settings;
    }

    @Override
    public Settings updateSettings(Long id, Settings settings) {
        Settings existingSettings = settingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + id));

        existingSettings.setRegistrations(settings.isRegistrations());

        Settings updatedSettings = settingsRepository.save(existingSettings);
        return updatedSettings;
    }

    @Override
    public void deleteSettings(Long id) {
        Settings settings = settingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + id));

        settingsRepository.delete(settings);
    }

}
