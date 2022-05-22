package pl.transport.backend.data.assortment;

import lombok.EqualsAndHashCode;
import lombok.Value;
import pl.transport.backend.data.tickets.Ticket;

@Value
@EqualsAndHashCode(callSuper = true)
public class SingleTicket extends TicketType {

	public SingleTicket(String name, int price, boolean isDiscounted) {
		super(name, price, isDiscounted);
	}

	@Override
	public Ticket create() {
		return new pl.transport.backend.data.tickets.SingleTicket();
	}
}
