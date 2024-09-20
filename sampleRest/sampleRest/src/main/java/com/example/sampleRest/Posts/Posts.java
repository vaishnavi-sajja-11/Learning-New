package com.example.sampleRest.Posts;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="Post")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Posts {
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String author;
	private String body;
	@Override
	public String toString() {
		return "Posts [author=" + author + ", body=" + body + "]";
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Posts(Integer id, String author, String body) {
		super();
		this.author = author;
		this.body = body;
		this.id = id;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}

	
	


}
