package com.example.kafkaSample.Config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class kafkaTopicConfig {
	
			@Bean
			public NewTopic topic() {
				return TopicBuilder.name("story1").build();
			}
			
}

