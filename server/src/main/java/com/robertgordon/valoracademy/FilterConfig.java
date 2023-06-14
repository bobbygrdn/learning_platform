package com.robertgordon.valoracademy;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.robertgordon.valoracademy.util.JwtFilter;

@Configuration
public class FilterConfig {

    @Bean
    FilterRegistrationBean jwtFilter() {
        FilterRegistrationBean filter = new FilterRegistrationBean<>();
        filter.setFilter(new JwtFilter());

        // provide endpoints which need to be restricted
        filter.addUrlPatterns("/api/v1/users", "/api/v1/courses", "/api/v1/lessons", "/api/v1/quizzes", "/api/v1/questions", "/api/v1/options", "/api/v1/answers");
        return filter;
    }
}
