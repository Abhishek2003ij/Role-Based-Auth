package com.togisoft.backend.security.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.togisoft.backend.security.entities.Role;
import com.togisoft.backend.security.entities.User;
import com.togisoft.backend.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class DatabaseConfig {
    private final UserRepository userRepository;

    @Bean
    public CommandLineRunner init() {
        return args -> {
            userRepository.save(new User("Abhishek", "IJ", "admin", "admin", Role.ADMIN));
        };
    }
}
