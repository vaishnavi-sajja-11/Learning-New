package com.example.Logger.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Logger.Entities.Log;
import com.example.Logger.Service.LoggerService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000/")
public class LoggerController {
	@Autowired
	LoggerService service;

	@GetMapping(path="getLogs")
	public List<Log> getAvailableLogs(){
		return service.getLogs();
	}
	@PostMapping(path="addLog",consumes="application/json", produces="application/json")
	public ResponseEntity<Log> addNewLog(@RequestBody Log log ) {
		Log savedLog = service.addNewLog(log);
		return ResponseEntity.ok(savedLog);
	}
	@GetMapping(path="getLogs/{id}",produces="application/json")
	public ResponseEntity<Object> getLogById(@PathVariable Long id )
	{
		Optional<Log> logDetails= service.findById(id);
		if(logDetails != null)
		{
			return ResponseEntity.ok(logDetails);
		}
		else
		{
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	@DeleteMapping(path="delete/{id}")
	public void deleteLogById(@PathVariable Long id) {
		 service.deleteById(id);
	}
	@PutMapping(path="update/{id}",consumes="application/json",produces="application/json")
	public void updateById(@PathVariable Long id, @RequestBody Log log) {
		Optional<Log> existingLog = service.findById(id);
		if(existingLog.isPresent()) {
			Log updatedLog = existingLog.get();
			updatedLog.setDate(log.getDate());
			updatedLog.setMistake(log.getMistake());
			updatedLog.setLesson(log.getLesson());
			service.updateById(updatedLog);
		}
		
	}
	
}
