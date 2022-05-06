package pl.transport.backend.data.seeding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.transport.backend.data.tickets.LongTimeTicket;
import pl.transport.backend.data.tickets.SingleTicket;
import pl.transport.backend.data.tickets.TimeTicket;
import pl.transport.backend.repositories.TicketRepository;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class TicketDataSeeder implements CommandLineRunner {

	private final TicketRepository ticketRepository;

	@Autowired
	public TicketDataSeeder(TicketRepository ticketRepository) {
		this.ticketRepository = ticketRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		ticketRepository.saveAll(List.of(
				new SingleTicket(null, null),
				new SingleTicket(LocalDateTime.now(), "2105321"),
				new TimeTicket(null, 30 * 60),
				new TimeTicket(LocalDateTime.now().minusSeconds(15 * 60), 10 * 60),
				new TimeTicket(LocalDateTime.now(), 10 * 60),
				new LongTimeTicket(LocalDateTime.now().plusDays(2), 30 * 60 * 60 * 24),
				new LongTimeTicket(LocalDateTime.now(), 30 * 60 * 60 * 24)
		));
	}
}
