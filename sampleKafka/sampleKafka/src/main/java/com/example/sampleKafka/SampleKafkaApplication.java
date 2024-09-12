package com.example.sampleKafka;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.config.TopicBuilder;

@SpringBootApplication
public class SampleKafkaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleKafkaApplication.class, args);
	}
	@Bean
	public NewTopic topic() {
		return TopicBuilder.name("story1").partitions(10).replicas(1).build();
	}
	@KafkaListener(id="newId", topics="story1")
	public void listen(String in)
	{
		System.out.println(in);
	}
}
