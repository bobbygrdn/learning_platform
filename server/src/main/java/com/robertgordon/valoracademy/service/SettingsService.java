package com.robertgordon.valoracademy.service;

import java.util.List;

import com.robertgordon.valoracademy.model.Settings;

public interface SettingsService {
    Settings saveSettings(Settings settings);

    List<Settings> getAllSettings();

    Settings getSettingsById(Long settingsId);

    Settings updateSettings(Long id, Settings settings);

    void deleteSettings(Long id);
}
