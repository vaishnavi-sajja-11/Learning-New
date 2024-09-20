package com.example.sampleRest.Posts;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class PostsController {
	
	@Autowired
	PostsService service;
	@GetMapping(path="/posts", produces= {"application/json"})
	public List<Posts> getPosts() {
		return service.retriveAll();
	}
	@PostMapping(path="/postData",produces= {"application/json"},consumes= {"application/json"})
	public ResponseEntity<Posts> createNewpost(@RequestBody Posts post)
	{
		Posts created = service.addNewPost(post);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().
				path("/{author}").buildAndExpand(created.getAuthor()).toUri();
		
		return ResponseEntity.created(location).build();
	}

	
}
