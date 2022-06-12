package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.users.Passenger;
import pl.transport.backend.data.users.User;
import pl.transport.backend.dto.RegistrationResult;
import pl.transport.backend.data.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Autowired
	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public List<User> getAll() {
		var users = new ArrayList<User>();
		userRepository.findAll().forEach(users::add);
		return users;
	}

	public Optional<User> getByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public RegistrationResult createUser(String username, String password) {
		if (password.length() < 8) return RegistrationResult.PASSWORD_TOO_SHORT;
		if (getByUsername(username).isPresent()) return RegistrationResult.DUPLICATE_USERNAME;

		var user = new Passenger(username, passwordEncoder.encode(password));
		userRepository.save(user);
		return RegistrationResult.SUCCESS;
	}
}
