package pl.transport.backend.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.transport.backend.data.assortment.TicketAssortment;
import pl.transport.backend.services.TicketAssortmentService;

@RestController
@RequestMapping("assortment")
public class TicketAssortmentController {

	private final TicketAssortmentService assortmentService;

	@Autowired
	public TicketAssortmentController(TicketAssortmentService assortmentService) {
		this.assortmentService = assortmentService;
	}

	@GetMapping("")
	public TicketAssortment getTicketAssortment() {
		return assortmentService.getTicketAssortment();
	}
}
