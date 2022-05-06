package pl.transport.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.transport.backend.data.tickets.Ticket;

public interface TicketRepository extends CrudRepository<Ticket, Long> {
}
