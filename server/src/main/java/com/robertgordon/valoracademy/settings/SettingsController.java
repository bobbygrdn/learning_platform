package com.robertgordon.valoracademy.settings;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.robertgordon.valoracademy.util.UrlPaths;

/** `@RestController` is an annotation in Spring that combines `@Controller` and 
 *  `@ResponseBody`. It is used to indicate that the class is a RESTful web service
 *  controller that handles HTTP requests and returns the response in the form of JSON. */
@RestController
/*
 * `@RequestMapping(UrlPaths.CLASSURL)` is setting the base URL path for all the endpoints in this controller to "/api/v1/" from the `UrlPaths class`. This means that all the endpoints in this controller will be accessed through URLs that start with "/api/v1/".
 */
@RequestMapping(UrlPaths.CLASSURL)
public class SettingsController {

  /** `@Autowired` is injecting an instance of the `SettingsService` class into 
   * the `SettingsController` class, so that the controller can use the methods 
   * provided by the service. The `private SettingsService SettingsService;` line 
   * is declaring a private instance variable of the `SettingsService` class, 
   * which will be initialized with the injected instance. */
    @Autowired
    private SettingsService SettingsService;

    /**
     * This method saves the settings provided as input using a POST request.
     * @param settings The "settings" parameter is an object of the class "Settings"
     *  that is being passed as a parameter to the "saveSettings" method. This object 
     * contains the data that needs to be saved or updated in the database. The 
     * method returns the saved or updated "Settings" object.
     * @return The method is returning an instance of the `Settings` class. The 
     * `saveSettings` method of the `SettingsService` is called with the `settings` 
     * parameter, and the result of that method call is returned.
     */
    @PostMapping("settings")
    public Settings saveSettings(Settings settings) {
        return this.SettingsService.saveSettings(settings);
    }

    /**
     * This method returns a list of all settings using a GET request.
     * 
     * @return A list of all settings.
     */
    @GetMapping("settings")
    public List<Settings> getAllSettings() {
        return this.SettingsService.getAllSettings();
    }

   /**
    * This method retrieves settings by ID and returns them as a ResponseEntity.
    * @param id The "id" parameter is a path variable that is used to identify a 
    * specific Settings object by its unique identifier. The method retrieves the 
    * Settings object with the given "id" from the database and returns it in the 
    * response body.
    * @return A ResponseEntity object containing the Settings object with the specified
    * ID.
    */
    @GetMapping("settings/{id}")
    public ResponseEntity<Settings> getSettingsById(@PathVariable("id") Long id) {
        Settings settings = this.SettingsService.getSettingsById(id);
        return ResponseEntity.ok(settings);
    }

    /**
     * This method updates the settings for a specific ID and returns the updated
     *  settings.
     * @param id The ID of the settings object that needs to be updated. It is passed
     *  as a path variable in the URL.
     * @param settings The parameter "settings" is of type Settings and is annotated 
     * with @RequestBody. This means that it is expected to receive a JSON object in 
     * the request body that can be deserialized into a Settings object.
     * @return A ResponseEntity object containing the updated Settings object.
     */
    @PutMapping("settings/{id}")
    public ResponseEntity<Settings> updateSettings(@PathVariable("id") Long id, @RequestBody Settings settings) {

        Settings updatedSettings = this.SettingsService.updateSettings(id, settings);
        return ResponseEntity.ok(updatedSettings);
    }

    /**
     * This method deletes a settings object with a specified ID and returns a 
     * success message.
     * @param id The id parameter is a Long type variable that represents the unique 
     * identifier of the settings that needs to be deleted. It is passed as a path 
     * variable in the URL of the DELETE request.
     * @return A ResponseEntity object with a message indicating that the settings with
     *  the specified ID has been deleted.
     */
    @DeleteMapping("settings/{id}")
    public ResponseEntity<String> deleteSettings(@PathVariable("id") Long id) {

        this.SettingsService.deleteSettings(id);
        return ResponseEntity.ok("Settings with ID: " + id + " has been deleted.");
    }
}
