package pl.transport.backend.data.assortment;

import lombok.Value;

@Value
public class LongTimeTicket extends TicketType {

	int validitySeconds;

	public LongTimeTicket(String name, int price, boolean isDiscounted, int validitySeconds) {
		super(name, price, isDiscounted);
		this.validitySeconds = validitySeconds;
	}
}
