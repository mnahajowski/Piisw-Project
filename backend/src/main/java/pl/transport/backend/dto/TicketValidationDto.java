package pl.transport.backend.dto;

import lombok.Value;

@Value
public class TicketValidationDto {

    long ticketId;
    String routeNumber;
}
