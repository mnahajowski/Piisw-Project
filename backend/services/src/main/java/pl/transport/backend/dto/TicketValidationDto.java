package pl.transport.backend.dto;

import lombok.NoArgsConstructor;
import lombok.Value;

@Value
@NoArgsConstructor(force = true)
public class TicketValidationDto {

	long ticketId;
	String routeNumber;
}
