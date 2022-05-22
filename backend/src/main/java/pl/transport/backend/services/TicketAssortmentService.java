package pl.transport.backend.services;

import org.springframework.stereotype.Service;
import pl.transport.backend.data.assortment.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class TicketAssortmentService {

	private TicketType discountTicket(TicketType ticketType) {
		var name = ticketType.getName();
		var newPrice = ticketType.getPrice() / 2;

		// FIXME?
		if (ticketType instanceof SingleTicket)
			return new SingleTicket(name, newPrice, true);
		else if (ticketType instanceof TimeTicket)
			return new TimeTicket(name, newPrice, true, ((TimeTicket) ticketType).getValiditySeconds());
		else if (ticketType instanceof LongTimeTicket)
			return new LongTimeTicket(name, newPrice, true, ((LongTimeTicket) ticketType).getValiditySeconds());
		else
			throw new IllegalArgumentException("Don't know how to discount a " + ticketType.getClass().getSimpleName());
	}

	public TicketAssortment getTicketAssortment() {
		var normalTickets = List.of(
				new SingleTicket("Single",3_00, false),
				new TimeTicket("10 minute" , 1_50, false, 10 * 60),
				new TimeTicket("30 minute", 2_50, false, 30 * 60),
				new TimeTicket("50 minute", 3_50, false, 50 * 60),
				new LongTimeTicket("1 month", 100_00, false, 30 * 60 * 60 * 24),
				new LongTimeTicket("2 month", 150_00, false, 60 * 60 * 60 * 24)
		);

		return new TicketAssortment(
				normalTickets.stream().flatMap(t -> Stream.of(t, discountTicket(t))).collect(Collectors.toList())
		);
	}

	public Optional<TicketType> verifyType(TicketType type) {
		if (getTicketAssortment().getTicketTypes().contains(type)) return Optional.of(type);
		return Optional.empty();
	}
}
