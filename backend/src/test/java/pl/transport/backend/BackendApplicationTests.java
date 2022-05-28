package pl.transport.backend;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import pl.transport.backend.data.tickets.LongTimeTicket;
import pl.transport.backend.data.tickets.SingleTicket;
import pl.transport.backend.data.tickets.TimeTicket;
import pl.transport.backend.repositories.TicketRepository;
import pl.transport.backend.services.TicketAssortmentService;
import pl.transport.backend.services.TicketService;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class BackendApplicationTests {

	@InjectMocks
	private TicketService ticketService;

	@InjectMocks
	private TicketAssortmentService ticketAssortmentService;

	@Mock
	private TicketRepository ticketRepository;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}
	@Test
	void timeTicketIsValid() {
		// GIVEN
		var timeTicket = new TimeTicket(LocalDateTime.now(), 10 * 60);
		var longTimeTicket = new LongTimeTicket(LocalDateTime.now(), 30 * 60 * 60 * 24);

		// THEN
		assertTrue(timeTicket.isValid("123", LocalDateTime.now().plusSeconds(5 * 60)));
		assertTrue(longTimeTicket.isValid("123", LocalDateTime.now().plusSeconds(10 * 60 * 60 * 24)));
	}

	@Test
	void ticketIsNotValid() {
		// GIVEN
		var timeTicket = new TimeTicket(LocalDateTime.now(), 10 * 60);
		var longTimeTicket = new LongTimeTicket(LocalDateTime.now(), 30 * 60 * 60 * 24);

		// THEN
		assertFalse(timeTicket.isValid("123", LocalDateTime.now().plusSeconds(11 * 60)));
		assertFalse(longTimeTicket.isValid("123", LocalDateTime.now().plusSeconds(60 * 60 * 60 * 24)));
	}
	@Test
	void validatorChecks() {
		// GIVEN
		var singleTicketRoute = new SingleTicket();
		assertFalse(singleTicketRoute.isValid("10", LocalDateTime.now()));

		// WHEN
		singleTicketRoute.validate("10", LocalDateTime.now().minusMinutes(1));

		// THEN
		assertFalse(singleTicketRoute.isValid("11", LocalDateTime.now()));
		assertTrue(singleTicketRoute.isValid("10", LocalDateTime.now()));
	}

}
