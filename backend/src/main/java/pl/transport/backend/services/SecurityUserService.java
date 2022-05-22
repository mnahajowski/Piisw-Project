package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.users.Passenger;
import pl.transport.backend.data.users.User;
import pl.transport.backend.repositories.UserRepository;

import java.util.Optional;

@Service
public class SecurityUserService {

	private final UserRepository userRepository;

	@Autowired
	public SecurityUserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	private Optional<User> getAuthenticatedUserInner() {
		var principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if (principal instanceof Jwt) {
			var jwt = (Jwt) principal;
			var username = jwt.getSubject();
			var user = userRepository.findByUsername(username);
			return Optional.of(user.orElseThrow(() ->
					new IllegalStateException(String.format("Got JWT for nonexistent user '%s'", username))
			));
		} else if (principal instanceof User) {
			return Optional.of((User) principal);
		} else {
			return Optional.empty();
		}
	}

	public Optional<User> getAuthenticatedUser() {
		return getAuthenticatedUserInner().flatMap(u -> userRepository.findById(u.getId()));
	}

	public Optional<Passenger> getAuthenticatedPassenger() {
		return getAuthenticatedUser().map(u -> {
			if (u instanceof Passenger) return (Passenger) u;
			return null;
		});
	}
}
