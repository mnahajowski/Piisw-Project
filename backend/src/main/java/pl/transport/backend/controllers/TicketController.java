package pl.transport.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import pl.transport.backend.data.assortment.TicketType;
import pl.transport.backend.data.tickets.Ticket;
import pl.transport.backend.services.TicketService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/ticket")
public class TicketController {

	private final TicketService ticketService;

	@Autowired
	public TicketController(TicketService ticketService) {
		this.ticketService = ticketService;
	}

	@GetMapping("")
	public List<Ticket> getAll() {
		return ticketService.getAll();
	}

	@GetMapping("/{id}/check")
	public boolean checkTicket(@PathVariable long id, @RequestParam String routeNumber) {
		return ticketService.getById(id)
				.map(t -> t.isValid(routeNumber, LocalDateTime.now()))
				.orElse(false);
	}

	@PostMapping("")
	public Ticket buyTicket(@RequestBody TicketType ticketType) {
		return ticketService.buyTicket(ticketType)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid ticket type"));
	}
}
