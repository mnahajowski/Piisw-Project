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
public class LongTimeTicket extends Ticket {

	@Column(nullable = true)
	LocalDateTime startTime;

	@Column(nullable = false)
	Integer validitySeconds;

	public LongTimeTicket(boolean discounted, LocalDateTime startTime, int validitySeconds) {
		super(discounted);
		this.startTime = startTime;
		this.validitySeconds = validitySeconds;
	}

	@Override
	public boolean isValid(String routeNumber, LocalDateTime atTime) {
		if (startTime == null) return false;

		return startTime.plusSeconds(validitySeconds).isAfter(atTime);
	}

	@Override
	public boolean validate(String routeNumber, LocalDateTime validationTime) {
		return false; // No operation, can't be validated
	}

	@Override
	public ValidityStatus getValidityStatus() {
		var now = LocalDateTime.now();
		if (now.isBefore(startTime)) return ValidityStatus.NOT_YET_VALID;
		if (isValid(null, now)) return ValidityStatus.VALID;
		return ValidityStatus.EXPIRED;
	}
}
