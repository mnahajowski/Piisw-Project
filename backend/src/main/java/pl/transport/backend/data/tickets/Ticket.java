package pl.transport.backend.data.tickets;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Ticket {
	@GeneratedValue
	@Id
	private Long id;

	public abstract boolean isValid(String routeNumber);
}
