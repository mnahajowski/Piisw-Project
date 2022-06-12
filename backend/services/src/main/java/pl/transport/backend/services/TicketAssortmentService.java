package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.assortment.TicketAssortment;
import pl.transport.backend.data.assortment.TicketType;
import pl.transport.backend.data.repositories.TicketTypeRepository;

import java.util.Optional;

@Service
public class TicketAssortmentService {

	private final TicketTypeRepository ticketTypeRepository;

	@Autowired
	public TicketAssortmentService(TicketTypeRepository ticketTypeRepository) {
		this.ticketTypeRepository = ticketTypeRepository;
	}

	public TicketAssortment getTicketAssortment() {
		return new TicketAssortment(ticketTypeRepository.findAll());
	}

	public Optional<TicketType> verifyType(TicketType type) {
		if (getTicketAssortment().getTicketTypes().contains(type)) return Optional.of(type);
		return Optional.empty();
	}
}
