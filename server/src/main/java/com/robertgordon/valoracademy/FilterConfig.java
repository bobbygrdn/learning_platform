package com.robertgordon.valoracademy;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.robertgordon.valoracademy.util.UrlPaths;
import com.robertgordon.valoracademy.util.JwtFilter;

@Configuration
public class FilterConfig {

    @Bean
    FilterRegistrationBean jwtFilter() {
        FilterRegistrationBean filter = new FilterRegistrationBean<>();
        filter.setFilter(new JwtFilter());

        // provide endpoints which need to be restricted
        filter.addUrlPatterns(UrlPaths.USERS, UrlPaths.COURSES, UrlPaths.LESSONS, UrlPaths.QUIZZES, UrlPaths.QUESTIONS, UrlPaths.OPTIONS, UrlPaths.ANSWERS);
        return filter;
    }
}
