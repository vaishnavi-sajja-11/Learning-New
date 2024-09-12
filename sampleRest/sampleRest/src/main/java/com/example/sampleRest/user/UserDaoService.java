package com.example.sampleRest.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class UserDaoService {
	private static List<Users> users = new ArrayList<>();
	static {
		users.add(new Users(1001,"Adam", LocalDate.now().minusYears(30)));
		users.add(new Users(1002,"Jim", LocalDate.now().minusYears(21)));
		users.add(new Users(1003,"Rekha", LocalDate.now().minusYears(29)));
	}
	public List<Users> findAll() {
		// TODO Auto-generated method stub
		return users;
	}
	public Users findById(int id) {
		// TODO Auto-generated method stub
		Users user = users.stream().filter(u ->u.getId()==id).findFirst().get();
		return user;
	}
	public Users addUser(Users user) {
		// TODO Auto-generated method stub
		users.add(user);
		return user;
	}
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		Users user = users.stream().filter(u ->u.getId()==id).findFirst().get();
		users.remove(user);
	}

}
