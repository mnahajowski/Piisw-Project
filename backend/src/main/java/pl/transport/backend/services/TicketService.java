package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.assortment.TicketType;
import pl.transport.backend.data.tickets.Ticket;
import pl.transport.backend.dto.TicketValidationResult;
import pl.transport.backend.repositories.TicketRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

	private final TicketRepository ticketRepository;
	private final SecurityUserService securityUserService;
	private final TicketAssortmentService ticketAssortmentService;

	@Autowired
	public TicketService(TicketRepository ticketRepository, SecurityUserService securityUserService,
	                     TicketAssortmentService ticketAssortmentService) {
		this.ticketRepository = ticketRepository;
		this.securityUserService = securityUserService;
		this.ticketAssortmentService = ticketAssortmentService;
	}

	public List<Ticket> getAll() {
		var tickets = new ArrayList<Ticket>();
		ticketRepository.findAll().forEach(tickets::add);
		return tickets;
	}

	public List<Ticket> getAllForAuthenticatedPassenger() {
		var passenger = securityUserService.getAuthenticatedPassenger()
				.orElseThrow(() -> new IllegalStateException("Tried to get tickets while not authenticated as a Passenger"));
		return ticketRepository.findAllByOwner(passenger);
	}

	public Optional<Ticket> getById(long id) {
		return ticketRepository.findById(id);
	}

	public Optional<Ticket> buyTicket(TicketType type, Long startTime) {
		var passenger = securityUserService.getAuthenticatedPassenger()
				.orElseThrow(() -> new IllegalStateException("Tried to buy ticket while not authenticated as a Passenger"));

		var maybeTicket = ticketAssortmentService.verifyType(type).flatMap(tt -> tt.create(startTime));
		maybeTicket.ifPresent(t -> {
			t.setOwner(passenger);
			ticketRepository.save(t);
		});
		return maybeTicket;
	}

	public TicketValidationResult validate(long ticketId, String routeNumber) {
		var ticket = ticketRepository.findById(ticketId).orElse(null);
		if (ticket == null) return TicketValidationResult.NOT_FOUND;

		if (ticket.validate(routeNumber, LocalDateTime.now())) {
			ticketRepository.save(ticket);
			return TicketValidationResult.SUCCESS;
		}

		return TicketValidationResult.ALREADY_VALIDATED;
	}
}
