package pl.transport.backend.data.seeding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class DataSeeder implements CommandLineRunner {

	private final TicketRepository ticketRepository;
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Autowired
	public DataSeeder(TicketRepository ticketRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.ticketRepository = ticketRepository;
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
	}
}
