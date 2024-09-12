package com.example.sampleRest.HelloController;

import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	private MessageSource messageSource;
	public HelloController(MessageSource messageSource) {
		messageSource = this.messageSource;
	}
	//@GetMapping("/getHello")
	@RequestMapping(method = RequestMethod.GET, path="/getHello") 
	public String getHello() {
		return "Hello";
	}
	@GetMapping("/get")
	public HelloWorldBean getHelloWorldBean() {
		return new HelloWorldBean("This is a bean");
	}
	@GetMapping("/getHello/{name}")
	public HelloWorldBean HelloWorld(@PathVariable String name)
	{
		return new HelloWorldBean("Hello World Bean: " + name);
	}
	@GetMapping("/greet")
	public String HelloWorldInternationalized()
	{
		return "good Morning";
	}

}
