package pl.transport.backend.data.tickets;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

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
	public boolean isValid(String routeNumber) {
		if (validationTime == null || validationRouteNumber == null) return false;

		return validationTime.isBefore(LocalDateTime.now()) && validationRouteNumber.equals(routeNumber);
	}
}
