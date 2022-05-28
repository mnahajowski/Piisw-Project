package pl.transport.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.transport.backend.data.assortment.*;
import pl.transport.backend.repositories.TicketTypeRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
