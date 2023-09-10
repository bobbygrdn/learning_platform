package com.robertgordon.valoracademy;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.robertgordon.valoracademy.util.UrlPaths;
import com.robertgordon.valoracademy.util.JwtFilter;

/** `@Configuration` is used to define the `FilterConfig` class as a configuration
 * class for the application's filters. */
@Configuration
public class FilterConfig {

    /**
     * This method registers a JWT filter for specific API endpoints.
     * 
     * @return A FilterRegistrationBean object is being returned.
     */
    @Bean
    FilterRegistrationBean jwtFilter() {
        FilterRegistrationBean filter = new FilterRegistrationBean<>();
        filter.setFilter(new JwtFilter());

        // provide endpoints which need to be restricted
        filter.addUrlPatterns(UrlPaths.USERS, UrlPaths.COURSES, UrlPaths.LESSONS, UrlPaths.QUIZZES, UrlPaths.QUESTIONS, UrlPaths.OPTIONS, UrlPaths.ANSWERS);
        return filter;
    }
}
