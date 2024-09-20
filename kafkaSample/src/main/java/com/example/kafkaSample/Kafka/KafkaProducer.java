package com.example.kafkaSample.Kafka;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;


@Service
public class KafkaProducer {
	
	private static final org.slf4j.Logger logger = LoggerFactory.getLogger(KafkaProducer.class);
	
	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;
	
	public KafkaProducer(KafkaTemplate<String,String> kafkaTemplate)
	{
		kafkaTemplate = this.kafkaTemplate;
	}
	public void sendMessage(String message)
	{
		logger.info("message has been sent",message);
		kafkaTemplate.send("story1",message);
	}

}
