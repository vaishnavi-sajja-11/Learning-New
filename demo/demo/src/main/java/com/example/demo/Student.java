package com.example.demo;

import jakarta.persistence.Entity;

@Entity
public class Student {
	
	private int id;
	private String name;
	private int marks;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(int id, String name, int marks, String grade) {
		super();
		this.id = id;
		this.name = name;
		this.marks = marks;
		Grade = grade;
	}
	private String Grade;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
	public String getGrade() {
		return Grade;
	}
	public void setGrade(String grade) {
		Grade = grade;
	}

}
