package com.example.sampleRest.user;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class UserResources {
	
	@Autowired
	private UserDaoService service;
	

	
	@GetMapping(path="/users", produces= {"application/json"})
	public List<Users> retriveAllUsers()
	{
		return service.findAll();
	}
	@GetMapping("/users/{id}")
	public Users retrieveUser(@PathVariable int id) throws UserNotFoundException
	{
		Users user =  service.findById(id);
		if(user == null)
		{
			throw new UserNotFoundException("id" +id);
		}
		return user;
	}
	@PostMapping("/users")
	public  ResponseEntity<Users> createNewUser(@RequestBody Users user)
	{
		Users created = service.addUser(user);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().
				path("/{id}").buildAndExpand(created.getId()).toUri();
		
		return ResponseEntity.created(location).build();
	}
	@DeleteMapping("/users/remove/{id}")
	public void deleteUser(@PathVariable int id) throws UserNotFoundException
	{
		service.deleteById(id);
	}

}
