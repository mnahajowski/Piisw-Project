package pl.transport.backend.data.assortment;

import lombok.Value;

@Value
public class TimeTicket extends TicketType {

	int validitySeconds;

	public TimeTicket(String name, int price, boolean isDiscounted, int validitySeconds) {
		super(name, price, isDiscounted);
		this.validitySeconds = validitySeconds;
	}
}
