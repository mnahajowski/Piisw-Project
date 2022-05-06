package pl.transport.backend.data.assortment;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Value;
import lombok.experimental.NonFinal;

@NonFinal
@Value
@JsonTypeInfo(use = JsonTypeInfo.Id.MINIMAL_CLASS, property = "type")
public abstract class TicketType {

	String name;
	int price;
	boolean isDiscounted;
}
