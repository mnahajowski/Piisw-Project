package pl.transport.backend.data.assortment;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.transport.backend.data.tickets.Ticket;

import javax.persistence.Entity;
import java.util.Optional;

@Entity(name = "SingleTicketType")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class SingleTicket extends TicketType {

	public SingleTicket(String name, int price, boolean isDiscounted) {
		super(null, name, price, isDiscounted);
	}

	@Override
	public Optional<Ticket> create(Long startTime) {
		return Optional.of(new pl.transport.backend.data.tickets.SingleTicket(isDiscounted));
	}

	@Override
	public boolean hasStartTime() {
		return false;
	}
}
