package pl.transport.backend.data.validator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.transport.backend.data.tickets.LongTimeTicket;
import pl.transport.backend.data.tickets.SingleTicket;
import pl.transport.backend.data.tickets.TimeTicket;
import pl.transport.backend.data.tickets.Ticket;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@AllArgsConstructor
@Data
@Entity
@NoArgsConstructor
public class TicketValidator {

    @GeneratedValue
    @Id
    private Long id;
    @Column(nullable = false)
    private String routeNumber;

}
