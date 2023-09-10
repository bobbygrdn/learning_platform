package com.robertgordon.valoracademy.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robertgordon.valoracademy.settings.Settings;
import com.robertgordon.valoracademy.settings.SettingsService;

@SpringBootTest
public class SettingsServiceImplTest {

    @Autowired
    private SettingsService settingsService;

    @Test
    void testGetAllSettings() {
        // Arrange
        // Act
        List<Settings> result = settingsService.getAllSettings();

        // Assert
        assertNotNull(result);
    }
}
