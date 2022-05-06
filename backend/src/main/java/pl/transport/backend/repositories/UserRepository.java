package pl.transport.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.transport.backend.data.users.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
