package com.robertgordon.valoracademy.settings;

import java.util.List;

public interface SettingsService {
    Settings saveSettings(Settings settings);

    List<Settings> getAllSettings();

    Settings getSettingsById(Long settingsId);

    Settings updateSettings(Long id, Settings settings);

    void deleteSettings(Long id);
}
