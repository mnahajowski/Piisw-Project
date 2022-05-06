package pl.transport.backend.data.tickets;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.transport.backend.data.validator.TicketValidator;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;
import java.util.Optional;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
public class SingleTicket extends Ticket {

	@Column(nullable = true)
	LocalDateTime validationTime;

	@Column(nullable = true)
	String validationRouteNumber;

	@Override
	public boolean isValid(String routeNumber, LocalDateTime atTime) {
		if (validationTime == null || validationRouteNumber == null) return false;

		return validationTime.isBefore(atTime) && validationRouteNumber.equals(routeNumber);
	}

	@Override
	public void validate(TicketValidator ticketValidator, LocalDateTime validationTime) {
		this.setValidationTime(validationTime);
		this.setValidationRouteNumber(ticketValidator.getRouteNumber());
	}
}
