package pl.transport.backend.data.assortment;

import lombok.Value;

@Value
public class SingleTicket extends TicketType {

	public SingleTicket(String name, int price, boolean isDiscounted) {
		super(name, price, isDiscounted);
	}
}
