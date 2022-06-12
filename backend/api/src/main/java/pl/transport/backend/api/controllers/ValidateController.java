package pl.transport.backend.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.transport.backend.dto.TicketValidationDto;
import pl.transport.backend.dto.TicketValidationResult;
import pl.transport.backend.services.TicketService;

@RestController
@RequestMapping("validate")
public class ValidateController {

	private final TicketService ticketService;

	@Autowired
	public ValidateController(TicketService ticketService) {
		this.ticketService = ticketService;
	}

	@PostMapping("")
	public TicketValidationResult validate(@RequestBody TicketValidationDto validationDto) {
		return ticketService.validate(validationDto.getTicketId(), validationDto.getRouteNumber());
	}
}
