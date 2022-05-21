package pl.transport.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.transport.backend.data.users.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
	public Optional<User> findByUsername(String username);
}
