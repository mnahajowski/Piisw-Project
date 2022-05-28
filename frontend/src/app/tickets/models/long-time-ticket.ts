import {TicketType} from "./ticket-type";

export interface LongTimeTicket extends TicketType {
  validitySeconds: Number;
}
