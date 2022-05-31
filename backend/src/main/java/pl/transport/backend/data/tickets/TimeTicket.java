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
public class TimeTicket extends Ticket {

	@Column(nullable = true)
	LocalDateTime validationTime;

	@Column(nullable = false)
	Integer validitySeconds;

	@Override
	public boolean isValid(String routeNumber, LocalDateTime atTime) {
		if (validationTime == null) return false;

		return validationTime.plusSeconds(validitySeconds).isAfter(atTime);
	}

	@Override
	public boolean validate(String routeNumber, LocalDateTime validationTime) {
		if (this.validationTime != null) return false; // Already validated
		this.setValidationTime(validationTime);
		return true;
	}

	@Override
	public ValidityStatus getValidityStatus() {
		if (validationTime == null) return ValidityStatus.NOT_YET_VALID;
		if (isValid(null, LocalDateTime.now())) return ValidityStatus.VALID;
		return ValidityStatus.EXPIRED;
	}
}
