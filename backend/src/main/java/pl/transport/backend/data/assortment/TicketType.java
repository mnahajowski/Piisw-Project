package pl.transport.backend.data.assortment;

import lombok.Value;
import lombok.experimental.NonFinal;

@NonFinal
@Value
public abstract class TicketType {

	String name;
	int price;
	boolean isDiscounted;
}
