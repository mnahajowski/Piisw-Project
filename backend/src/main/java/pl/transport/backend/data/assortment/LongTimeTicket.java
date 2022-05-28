package pl.transport.backend.data.assortment;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.transport.backend.data.tickets.Ticket;

import javax.persistence.Entity;
import java.time.LocalDateTime;

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
	public Ticket create() {
		return new pl.transport.backend.data.tickets.LongTimeTicket(LocalDateTime.now(), getValiditySeconds());
	}
}
