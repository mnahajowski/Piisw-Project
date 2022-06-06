import { TicketType } from "./ticket-type";

export interface TimeTicketType extends TicketType {
  validitySeconds: number;
}
