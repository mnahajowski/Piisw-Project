package pl.transport.backend.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.transport.backend.data.assortment.TicketType;

public interface TicketTypeRepository extends JpaRepository<TicketType, Long> {
}
