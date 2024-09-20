package com.example.sampleRest.Posts;

import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

public interface Repository extends JpaRepository<Posts, String> {
	
	

}
