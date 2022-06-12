package pl.transport.backend.data.assortment;

import lombok.Value;

import java.util.List;

@Value
public class TicketAssortment {

	List<TicketType> ticketTypes;
}
