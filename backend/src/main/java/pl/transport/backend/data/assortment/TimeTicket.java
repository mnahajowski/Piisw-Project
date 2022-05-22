package pl.transport.backend.data.assortment;

import lombok.EqualsAndHashCode;
import lombok.Value;
import pl.transport.backend.data.tickets.Ticket;

@Value
@EqualsAndHashCode(callSuper = true)
public class TimeTicket extends TicketType {

	int validitySeconds;

	public TimeTicket(String name, int price, boolean isDiscounted, int validitySeconds) {
		super(name, price, isDiscounted);
		this.validitySeconds = validitySeconds;
	}

	@Override
	public Ticket create() {
		return new pl.transport.backend.data.tickets.TimeTicket(null, getValiditySeconds());
	}
}
