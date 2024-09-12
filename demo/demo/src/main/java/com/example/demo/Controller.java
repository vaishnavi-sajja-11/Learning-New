package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
	@GetMapping(path="/getStudents", produces="application/json")
	public void getStudentDetails() {
		System.out.println("this is get req");
	}

}
