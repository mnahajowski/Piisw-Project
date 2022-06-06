import { TicketType } from "./ticket-type";

export interface LongTimeTicketType extends TicketType {
  validitySeconds: number;
}
