package pl.transport.backend.data.tickets;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
public class LongTimeTicket extends Ticket {

	@Column(nullable = true)
	LocalDateTime startTime;

	@Column(nullable = false)
	Integer validitySeconds;
}
