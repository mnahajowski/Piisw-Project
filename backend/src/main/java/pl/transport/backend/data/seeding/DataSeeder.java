package pl.transport.backend.data.seeding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import pl.transport.backend.data.assortment.TicketAssortment;
import pl.transport.backend.data.assortment.TicketType;
import pl.transport.backend.data.tickets.LongTimeTicket;
import pl.transport.backend.data.tickets.SingleTicket;
import pl.transport.backend.data.tickets.TimeTicket;
import pl.transport.backend.data.users.Passenger;
import pl.transport.backend.data.users.Ticketer;
import pl.transport.backend.repositories.TicketRepository;
import pl.transport.backend.repositories.TicketTypeRepository;
import pl.transport.backend.repositories.UserRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class DataSeeder implements CommandLineRunner {

	private final TicketRepository ticketRepository;
	private final TicketTypeRepository ticketTypeRepository;
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Autowired
	public DataSeeder(TicketRepository ticketRepository, TicketTypeRepository ticketTypeRepository,
	                  UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.ticketRepository = ticketRepository;
		this.ticketTypeRepository = ticketTypeRepository;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public void run(String... args) throws Exception {
		var passenger = new Passenger("user", passwordEncoder.encode("user"));
		var passenger2 = new Passenger("user2", passwordEncoder.encode("user2"));

		userRepository.saveAll(List.of(
				new Ticketer("ticketer", passwordEncoder.encode("ticketer")),
				passenger, passenger2
		));

		ticketRepository.saveAll(Stream.of(
				new SingleTicket(null, null),
				new SingleTicket(LocalDateTime.now(), "2105321"),
				new TimeTicket(null, 30 * 60),
				new TimeTicket(LocalDateTime.now().minusSeconds(15 * 60), 10 * 60),
				new TimeTicket(LocalDateTime.now(), 10 * 60),
				new LongTimeTicket(LocalDateTime.now().plusDays(2), 30 * 60 * 60 * 24),
				new LongTimeTicket(LocalDateTime.now(), 30 * 60 * 60 * 24)
		).peek(t -> t.setOwner(passenger)).collect(Collectors.toList()));

		ticketRepository.saveAll(Stream.of(
				new SingleTicket(null, null),
				new SingleTicket(LocalDateTime.now(), "1032")
		).peek(t -> t.setOwner(passenger2)).collect(Collectors.toList()));

		ticketTypeRepository.saveAll(getTicketAssortment().getTicketTypes());
	}

	private TicketType discountTicket(TicketType ticketType) {
		var name = ticketType.getName();
		var newPrice = ticketType.getPrice() / 2;

		if (ticketType instanceof pl.transport.backend.data.assortment.SingleTicket)
			return new pl.transport.backend.data.assortment.SingleTicket(name, newPrice, true);
		else if (ticketType instanceof pl.transport.backend.data.assortment.TimeTicket)
			return new pl.transport.backend.data.assortment.TimeTicket(name, newPrice, true, ((pl.transport.backend.data.assortment.TimeTicket) ticketType).getValiditySeconds());
		else if (ticketType instanceof pl.transport.backend.data.assortment.LongTimeTicket)
			return new pl.transport.backend.data.assortment.LongTimeTicket(name, newPrice, true, ((pl.transport.backend.data.assortment.LongTimeTicket) ticketType).getValiditySeconds());
		else
			throw new IllegalArgumentException("Don't know how to discount a " + ticketType.getClass().getSimpleName());
	}

	private TicketAssortment getTicketAssortment() {
		var normalTickets = List.of(
				new pl.transport.backend.data.assortment.SingleTicket("Single",3_00, false),
				new pl.transport.backend.data.assortment.TimeTicket("10 minute" , 1_50, false, 10 * 60),
				new pl.transport.backend.data.assortment.TimeTicket("30 minute", 2_50, false, 30 * 60),
				new pl.transport.backend.data.assortment.TimeTicket("50 minute", 3_50, false, 50 * 60),
				new pl.transport.backend.data.assortment.LongTimeTicket("1 month", 100_00, false, 30 * 60 * 60 * 24),
				new pl.transport.backend.data.assortment.LongTimeTicket("2 month", 150_00, false, 60 * 60 * 60 * 24)
		);

		return new TicketAssortment(
				normalTickets.stream().flatMap(t -> Stream.of(t, discountTicket(t))).collect(Collectors.toList())
		);
	}
}
