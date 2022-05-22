package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.assortment.TicketType;
import pl.transport.backend.data.tickets.Ticket;
import pl.transport.backend.repositories.TicketRepository;
import pl.transport.backend.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class TicketService {

	private final TicketRepository ticketRepository;
	private final SecurityUserService securityUserService;
	private final UserRepository userRepository;
	private final TicketAssortmentService ticketAssortmentService;

	@Autowired
	public TicketService(TicketRepository ticketRepository, SecurityUserService securityUserService,
	                     UserRepository userRepository, TicketAssortmentService ticketAssortmentService) {
		this.ticketRepository = ticketRepository;
		this.securityUserService = securityUserService;
		this.userRepository = userRepository;
		this.ticketAssortmentService = ticketAssortmentService;
	}

	public List<Ticket> getAll() {
		var tickets = new ArrayList<Ticket>();
		ticketRepository.findAll().forEach(tickets::add);
		return tickets;
	}

	public Optional<Ticket> getById(long id) {
		return ticketRepository.findById(id);
	}

	public Optional<Ticket> buyTicket(TicketType type) {
		var passenger = securityUserService.getAuthenticatedPassenger()
				.orElseThrow(() -> new IllegalStateException("Tried to buy ticket while not authenticated as a Passenger"));

		var maybeTicket = ticketAssortmentService.verifyType(type).map(TicketType::create);
		maybeTicket.ifPresent(t -> {
			ticketRepository.save(t);
			passenger.setTickets(Stream.concat(passenger.getTickets().stream(), Stream.of(t)).collect(Collectors.toList()));
			userRepository.save(passenger);
		});
		return maybeTicket;
	}
}
