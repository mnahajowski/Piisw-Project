package pl.transport.backend.data.users;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class Ticketer extends User {

	public Ticketer(String username, String password) {
		super(username, password);
	}
}
