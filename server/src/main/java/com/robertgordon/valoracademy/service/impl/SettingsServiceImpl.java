package com.robertgordon.valoracademy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robertgordon.valoracademy.exception.ResourceNotFoundException;
import com.robertgordon.valoracademy.model.Settings;
import com.robertgordon.valoracademy.repository.SettingsRepository;
import com.robertgordon.valoracademy.service.SettingsService;

/** The `@Service` annotation is used to indicate that a class is a business
 * service layer component. It is used to provide a clear separation between the 
 * business logic and the presentation layer. */
@Service
public class SettingsServiceImpl implements SettingsService {

    /** `@Autowired` is injecting an instance of `SettingsRepository` into the
     *  `SettingsServiceImpl` class, allowing it to access the methods defined in the
     *  `SettingsRepository` interface. */
    @Autowired
    private SettingsRepository settingsRepository;

   /**
    * This method saves the given settings object using the settings repository.
    * @param settings The "settings" parameter is an object of the class "Settings" 
    * that contains the settings data to be saved. The method "saveSettings" takes 
    * this object as input and saves it to the database using the "settingsRepository"
    * object. The method returns the saved "Settings" object.
    * @return The method `saveSettings` is returning an instance of the `Settings`
    * class, which is the object that was saved in the `settingsRepository`.
    */
    @Override
    public Settings saveSettings(Settings settings) {
        return settingsRepository.save(settings);
    }

    /**
     * This method returns a list of all settings from the settings repository.
     * 
     * @return A list of all the settings from the settings repository.
     */
    @Override
    public List<Settings> getAllSettings() {
        return settingsRepository.findAll();
    }

    /**
     * This method retrieves a Settings object by its ID from a repository and throws an
     * exception if it does not exist.
     * @param settingsId The parameter `settingsId` is a `Long` data type representing 
     * the unique identifier of a specific `Settings` object that needs to be retrieved 
     * from the database.
     * @return The method is returning an instance of the Settings class with the 
     * specified ID. If the ID does not exist in the database, a 
     * ResourceNotFoundException is thrown.
     */
    @Override
    public Settings getSettingsById(Long settingsId) {
        Settings settings = settingsRepository.findById(settingsId)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + settingsId));
        return settings;
    }

    /**
     * This method updates the registration settings of an existing entity with the given ID.
     * @param id The ID of the settings object that needs to be updated.
     * @param settings The "settings" parameter is an object of the class "Settings" 
     * that contains the updated values for the settings that need to be updated in the
     *  database.
     * @return The updated settings object is being returned.
     */
    @Override
    public Settings updateSettings(Long id, Settings settings) {
        Settings existingSettings = settingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + id));

        existingSettings.setRegistrations(settings.isRegistrations());

        Settings updatedSettings = settingsRepository.save(existingSettings);
        return updatedSettings;
    }

    /**
     * This method deletes a settings object by its ID, throwing an exception if it 
     * does not exist.
     * @param id The parameter "id" is a Long data type representing the unique
     * identifier of the Settings object that needs to be deleted from the database.
     */
    @Override
    public void deleteSettings(Long id) {
        Settings settings = settingsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Settings does not exist with the ID: " + id));

        settingsRepository.delete(settings);
    }

}
