package pl.transport.backend.data.seeding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.transport.backend.data.tickets.LongTimeTicket;
import pl.transport.backend.data.tickets.SingleTicket;
import pl.transport.backend.data.tickets.TimeTicket;
import pl.transport.backend.data.users.Passenger;
import pl.transport.backend.data.users.Ticketer;
import pl.transport.backend.repositories.TicketRepository;
import pl.transport.backend.repositories.UserRepository;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

	private final TicketRepository ticketRepository;
	private final UserRepository userRepository;

	@Autowired
	public DataSeeder(TicketRepository ticketRepository, UserRepository userRepository) {
		this.ticketRepository = ticketRepository;
		this.userRepository = userRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		var invalidTime = new TimeTicket(LocalDateTime.now().minusSeconds(15 * 60), 10 * 60);
		var validTime = new TimeTicket(null, 30 * 60);

		ticketRepository.saveAll(List.of(
				new SingleTicket(null, null),
				new SingleTicket(LocalDateTime.now(), "2105321"),
				validTime,
				invalidTime,
				new TimeTicket(LocalDateTime.now(), 10 * 60),
				new LongTimeTicket(LocalDateTime.now().plusDays(2), 30 * 60 * 60 * 24),
				new LongTimeTicket(LocalDateTime.now(), 30 * 60 * 60 * 24)
		));

		var passenger = new Passenger(List.of(validTime, invalidTime));
		userRepository.saveAll(List.of(new Ticketer(), passenger));
	}
}
