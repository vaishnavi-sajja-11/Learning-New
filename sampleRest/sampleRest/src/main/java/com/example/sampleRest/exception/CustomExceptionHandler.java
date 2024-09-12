package com.example.sampleRest.exception;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class CustomExceptionHandler extends ResponseEntityExceptionHandler{
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllException(Exception ex, WebRequest req)
	{
		ErrorHandler error = new ErrorHandler(LocalDate.now(),ex.getMessage(),req.getDescription(false));
		return new ResponseEntity(error,HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
