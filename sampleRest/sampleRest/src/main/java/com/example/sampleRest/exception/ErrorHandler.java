package com.example.sampleRest.exception;

import java.time.LocalDate;

public class ErrorHandler {
	public ErrorHandler(LocalDate date, String message, String details) {
		super();
		this.date = date;
		this.message = message;
		this.details = details;
	}
	private LocalDate date;
	private String message;
	private String details;
	public LocalDate getDate() {
		return date;
	}
	public String getMessage() {
		return message;
	}
	public String getDetails() {
		return details;
	}

}
