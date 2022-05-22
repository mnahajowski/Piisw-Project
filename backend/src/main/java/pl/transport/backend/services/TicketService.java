package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.assortment.TicketType;
import pl.transport.backend.data.tickets.Ticket;
import pl.transport.backend.repositories.TicketRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

	private final TicketRepository ticketRepository;
	private final TicketAssortmentService ticketAssortmentService;

	@Autowired
	public TicketService(TicketRepository ticketRepository, TicketAssortmentService ticketAssortmentService) {
		this.ticketRepository = ticketRepository;
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
		var maybeTicket = ticketAssortmentService.verifyType(type).map(TicketType::create); // TODO tie to user
		maybeTicket.ifPresent(ticketRepository::save);
		return maybeTicket;
	}
}
