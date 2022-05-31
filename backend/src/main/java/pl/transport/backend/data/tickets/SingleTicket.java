package pl.transport.backend.data.tickets;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;

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
	public boolean validate(String routeNumber, LocalDateTime validationTime) {
		if (this.validationTime != null) return false; // Already validated
		this.setValidationTime(validationTime);
		this.setValidationRouteNumber(routeNumber);
		return true;
	}
}
