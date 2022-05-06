package pl.transport.backend.data.assortment;

import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@EqualsAndHashCode(callSuper = true)
public class SingleTicket extends TicketType {

	public SingleTicket(String name, int price, boolean isDiscounted) {
		super(name, price, isDiscounted);
	}
}
