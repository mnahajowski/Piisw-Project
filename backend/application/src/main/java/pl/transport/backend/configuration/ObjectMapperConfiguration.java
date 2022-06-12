package pl.transport.backend.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

@Configuration
public class ObjectMapperConfiguration {

	@Bean
	public ObjectMapper objectMapper() {
		var mapper = new ObjectMapper();
		var module = new SimpleModule();
		module.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(LocalDateTime.class));
		mapper.registerModule(module);
		return mapper;
	}
}
