package pl.transport.backend.data.tickets;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;
import pl.transport.backend.data.validator.TicketValidator;

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

	public abstract boolean isValid(String routeNumber, LocalDateTime atTime);
	public abstract void validate(TicketValidator ticketValidator, LocalDateTime validationTime);
}