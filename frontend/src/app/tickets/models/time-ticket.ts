import { TicketType } from "./ticket-type";

export interface TimeTicket extends TicketType {
  validitySeconds: number;
}
