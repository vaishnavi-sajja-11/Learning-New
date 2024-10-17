package com.example.Logger.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Logger.Entities.Log;
import com.example.Logger.Repository.LogRepository;

@Service
public class LoggerService implements LogService{
		

	@Autowired
	LogRepository repository;

	public List<Log> getLogs() {
		return repository.findAll();
	}

	public Log addNewLog(Log log) {
		System.out.println(log);
		return repository.save(log);
	}

	public Optional<Log> findById(Long id) {
		return repository.findById(id);
	}

	public  void deleteById(Long id) {
		 repository.deleteById(id);
	}


	public Log updateById(Log log) {
		
		return repository.save(log);
	}
}
