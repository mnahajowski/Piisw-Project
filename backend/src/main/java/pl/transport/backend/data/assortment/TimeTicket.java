package pl.transport.backend.data.assortment;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.transport.backend.data.tickets.Ticket;

import javax.persistence.Entity;

@Entity(name = "TimeTicketType")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class TimeTicket extends TicketType {

	int validitySeconds;

	public TimeTicket(String name, int price, boolean isDiscounted, int validitySeconds) {
		super(null, name, price, isDiscounted);
		this.validitySeconds = validitySeconds;
	}

	@Override
	public Ticket create() {
		return new pl.transport.backend.data.tickets.TimeTicket(null, getValiditySeconds());
	}
}
