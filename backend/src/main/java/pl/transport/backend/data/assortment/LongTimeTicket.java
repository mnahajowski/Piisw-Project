package pl.transport.backend.data.assortment;

import lombok.EqualsAndHashCode;
import lombok.Value;
import pl.transport.backend.data.tickets.Ticket;

import java.time.LocalDateTime;

@Value
@EqualsAndHashCode(callSuper = true)
public class LongTimeTicket extends TicketType {

	int validitySeconds;

	public LongTimeTicket(String name, int price, boolean isDiscounted, int validitySeconds) {
		super(name, price, isDiscounted);
		this.validitySeconds = validitySeconds;
	}

	@Override
	public Ticket create() {
		return new pl.transport.backend.data.tickets.LongTimeTicket(LocalDateTime.now(), getValiditySeconds());
	}
}
