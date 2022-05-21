package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.users.User;
import pl.transport.backend.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> getAll() {
		var users = new ArrayList<User>();
		userRepository.findAll().forEach(users::add);
		return users;
	}

	public Optional<User> getByUsername(String username) {
		return userRepository.findByUsername(username);
	}
}
