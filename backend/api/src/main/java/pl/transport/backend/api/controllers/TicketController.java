package pl.transport.backend.api.controllers;

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
@RequestMapping("ticket")
public class TicketController {

	private final TicketService ticketService;

	@Autowired
	public TicketController(TicketService ticketService) {
		this.ticketService = ticketService;
	}

	@GetMapping("")
	public List<Ticket> getAll() {
		return ticketService.getAllForAuthenticatedPassenger();
	}

	@GetMapping("/{id}/check")
	public boolean checkTicket(@PathVariable long id, @RequestParam String routeNumber) {
		return ticketService.getById(id)
				.map(t -> t.isValid(routeNumber, LocalDateTime.now()))
				.orElse(false);
	}

	@GetMapping("/{id}")
	public Ticket getById(@PathVariable long id) {
		return ticketService.getById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}

	@PostMapping("")
	public Ticket buyTicket(@RequestBody TicketType ticketType, @RequestParam(required = false) Long startTime) {
		if (ticketType.hasStartTime() && startTime == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This type of ticket needs a start time specified.");
		} else if(!ticketType.hasStartTime() && startTime != null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "This type of ticket must not have a start time specified.");
		}

		return ticketService.buyTicket(ticketType, startTime)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid ticket type"));
	}
}
