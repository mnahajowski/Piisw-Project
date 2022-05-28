package pl.transport.backend.data.tickets;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;
import pl.transport.backend.data.users.Passenger;
import pl.transport.backend.dto.TicketValidationDto;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@JsonTypeInfo(use = JsonTypeInfo.Id.MINIMAL_CLASS, property = "type")
public abstract class Ticket {
	@GeneratedValue
	@Id
	private Long id;

	@ManyToOne
	@JoinColumn(name = "owner_id")
	@JsonIgnore
	private Passenger owner;

	public abstract boolean isValid(String routeNumber, LocalDateTime atTime);
	public abstract boolean validate(String routeNumber, LocalDateTime validationTime);
}
