package com.example.Logger.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Logger.Entities.Log;

@Repository
public interface LogRepository extends JpaRepository<Log,Long>{

	
	


}
