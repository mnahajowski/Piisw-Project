package pl.transport.backend.data.users;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class User {

	@GeneratedValue
	@Id
	private Long id;
}
