package com.example.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LimitsController {
	
	@Autowired
	private Configuration config;
	
	
	@GetMapping("/getLimits")
	public Limits retrieveLimits() {
		return new Limits(1,1000);
		
	}
	@GetMapping("/limits-service")
	public Limits retrieveLimitsConfig() {
		return new Limits(config.getMinimum(),config.getMaximum());
		
	}

}
