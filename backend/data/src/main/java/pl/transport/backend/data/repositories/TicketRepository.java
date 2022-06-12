package pl.transport.backend.data.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.transport.backend.data.tickets.Ticket;
import pl.transport.backend.data.users.Passenger;

import java.util.List;

public interface TicketRepository extends CrudRepository<Ticket, Long> {

	public List<Ticket> findAllByOwner(Passenger owner);
}
