package pl.transport.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.transport.backend.data.tickets.Ticket;
import pl.transport.backend.services.TicketService;

@RestController
@RequestMapping("ticket")
public class TicketController {

	private final TicketService ticketService;

	@Autowired
	public TicketController(TicketService ticketService) {
		this.ticketService = ticketService;
	}

	@GetMapping("")
	public Iterable<Ticket> getAll() {
		return ticketService.getAll();
	}

	@GetMapping("/{id}/check")
	public boolean checkTicket(@PathVariable long id, @RequestBody String routeNumber) {
		return ticketService.getById(id).map(t -> t.isValid(routeNumber)).orElse(false);
	}
}
