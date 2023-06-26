package com.robertgordon.valoracademy;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/** `@SpringBootApplication` is a combination of three annotations: `@Configuration`,
 * `@EnableAutoConfiguration`, and `@ComponentScan`. It is used to indicate that this is the main class
 * of a Spring Boot application and enables auto-configuration and component scanning. */
@SpringBootApplication
public class ServerApplication {

	/**
	 * This is the main function that runs a Spring Boot application.
	 */
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	/**
	 * This method returns a command line runner that prints a message when the application starts.
	 * 
	 * @return A `CommandLineRunner` instance is being returned.
	 */
	@Bean
	CommandLineRunner commandLineRunner() {
		return args -> System.out.println("My application got started!!");
	}

}
