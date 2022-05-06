package pl.transport.backend.data.tickets;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.transport.backend.data.validator.TicketValidator;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
public class LongTimeTicket extends Ticket {

	@Column(nullable = true)
	LocalDateTime startTime;

	@Column(nullable = false)
	Integer validitySeconds;

	@Override
	public boolean isValid(String routeNumber, LocalDateTime atTime) {
		if (startTime == null) return false;

		return startTime.plusSeconds(validitySeconds).isAfter(atTime);
	}

	@Override
	public void validate(TicketValidator ticketValidator, LocalDateTime validationTime) {
		this.setStartTime(validationTime);
	}
}
