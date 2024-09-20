package com.example.sampleRest.Posts;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class PostsService {
	
	private static List<Posts> post= new ArrayList<>();
	static {
		post.add(new Posts(1001,"Vaishnavi","This is a sample service"));
	}
	
	public List<Posts> retriveAll() 
	{
		post.remove(null);
		return post;
	}

	public Posts addNewPost(Posts post1) {
		// TODO Auto-generated method stub
		 post.add(post1);
		 return post1;
		
	}

}
