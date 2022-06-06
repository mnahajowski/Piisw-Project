package pl.transport.backend.data.assortment;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.transport.backend.data.tickets.Ticket;

import javax.persistence.Entity;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;
import java.util.TimeZone;

@Entity(name = "LongTimeTicketType")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class LongTimeTicket extends TicketType {

	int validitySeconds;

	public LongTimeTicket(String name, int price, boolean isDiscounted, int validitySeconds) {
		super(null, name, price, isDiscounted);
		this.validitySeconds = validitySeconds;
	}

	@Override
	public Optional<Ticket> create(Long startTime) {
		var time = LocalDateTime.ofInstant(Instant.ofEpochSecond(startTime), TimeZone.getDefault().toZoneId());
		var day = time.truncatedTo(ChronoUnit.DAYS);
		var now = LocalDateTime.now();
		var today = now.truncatedTo(ChronoUnit.DAYS);

		if (day.isBefore(today)) {
			return Optional.empty();
		}
		else if (day.isEqual(today)) {
			time = now;
		}
		return Optional.of(new pl.transport.backend.data.tickets.LongTimeTicket(isDiscounted, time, getValiditySeconds()));
	}

	@Override
	public boolean hasStartTime() {
		return true;
	}
}
