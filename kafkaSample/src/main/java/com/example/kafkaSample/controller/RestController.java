package com.example.kafkaSample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.kafkaSample.Kafka.KafkaProducer;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	@Autowired
	private KafkaProducer producer;
	
	public RestController (KafkaProducer producer)
	{
		producer = this.producer;
	}
	
	@GetMapping("/publish")
	public ResponseEntity<String> publish(@RequestParam("message") String message)
	{
		producer.sendMessage(message);
		return ResponseEntity.ok("success");
	}

}
