package com.example.sampleRest.Posts;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Posts {
	
	
	private String author;
	private String body;
	@Override
	public String toString() {
		return "Posts [author=" + author + ", body=" + body + "]";
	}
	public Posts() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Posts(String author, String body) {
		super();
		this.author = author;
		this.body = body;
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
