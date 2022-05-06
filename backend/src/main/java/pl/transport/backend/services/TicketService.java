package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.tickets.Ticket;
import pl.transport.backend.repositories.TicketRepository;

import java.util.Optional;

@Service
public class TicketService {

	private final TicketRepository ticketRepository;

	@Autowired
	public TicketService(TicketRepository ticketRepository) {
		this.ticketRepository = ticketRepository;
	}

	public Iterable<Ticket> getAll() {
		return ticketRepository.findAll();
	}

	public Optional<Ticket> getById(long id) {
		return ticketRepository.findById(id);
	}
}
